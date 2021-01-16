import { nanoid } from 'nanoid'
import client from 'part:@sanity/base/client'
import parseHTML from './parser/parseHTML'
import { uploadImage } from './utils/utils'
import data from './wordpress-data'
//import data from './wordpress-test'
// Run this script with: `sanity exec --with-user-token migrations/migrate-from-wordpress.js`

/**
 * For testing: Clean data before importing new data.
 */
async function cleanData() {
  // warning: the following code will delete all posts
  // await client.mutate([
  //   {
  //     delete: {
  //       query: "*[_type == 'post']"
  //     }
  //   }
  // ])
}

/**
 * Filter and upload each figure block
 * @param {*} blocks
 */
async function uploadBlockImages(unfilteredBlocks) {
  // filter figure blocks
  const blocks = unfilteredBlocks.filter(v => v._type === 'figure')

  for (const block of blocks) {
    const url = block.image._sanityAsset.replace('image@', '')
    const image = await uploadImage(url)

    // note, here the image block is being mutated by reference, not the best practice
    block.image = {
      _type: 'image',
      asset: {
        _ref: image._id,
        _type: 'reference'
      }
    }
  }
}

/**
 * Wrap ups the category record
 * @param {*} data
 */
function createCategoryRef(data) {
  return {
    _type: 'reference',
    _ref: data._id,
    _key: nanoid()
  }
}

/**
 * Fetch otherwise create a new category
 * @param {string} title
 */
async function uploadCategory(title) {
  const categoryRecord = await client.fetch(`*[_type == 'category' && title==$title]`, {
    title
  })

  if (categoryRecord.length > 0) {
    return createCategoryRef(categoryRecord[0])
  }

  return createCategoryRef(
    await client.create({
      title,
      _type: 'category',
      description: title
    })
  )
}

/**
 * Upload and return the data structure for the main image
 */
async function uploadMainImage(url, alt = '', caption = '') {
  const image = await uploadImage(url)

  return {
    _type: 'featuredImage',
    alt: alt,
    caption: caption,
    asset: {
      _type: 'reference',
      _ref: image._id
    }
  }
}

/**
 * Process each record
 * @param {*} data
 */
async function uploadData(data) {
  let count = 0
  for (const wpRecord of data) {
    count++
    console.log(`- Record ${count} of ${data.length} - Importing "${wpRecord.title}"`)
    const bodyBlocks = parseHTML(wpRecord.blockContent)
    const excerptBlocks = parseHTML(wpRecord.excerpt)

    await uploadBlockImages(bodyBlocks)
    await uploadBlockImages(excerptBlocks)

    const category = await uploadCategory(wpRecord.category)

    const mainImage = wpRecord.featuredImage
      ? await uploadMainImage(wpRecord.featuredImage, wpRecord.title, wpRecord.title)
      : undefined

    await client.createOrReplace({
      _id: 'wp-post' + wpRecord._id,
      featuredImage: mainImage,
      title: wpRecord.title,
      slug: { _type: 'slug', current: wpRecord.slug },
      excerpt: excerptBlocks,
      publishedAt: wpRecord.publishedAt__1,
      _type: 'post',
      blockContent: bodyBlocks,
      categories: [category], // currently this post schema supports multiple categories
      seo: { _type: 'seo-tools', focus_keyword: wpRecord._genesis_keywords, meta_description: wpRecord._genesis_description, seo_title: wpRecord._genesis_title}
    })
  }
}

async function migrate(data) {
  await cleanData()
  await uploadData(data)
}

migrate(data).catch(err => {
  console.error(err)
  process.exit(1)
})
