import { nanoid } from 'nanoid'
import client from 'part:@sanity/base/client'
import parseHTML from './parser/parseHTML'
import { uploadImage } from './utils/utils'
import data from './wordpress-data'

// Run this script with: `sanity exec --with-user-token migrations/migrate-from-wordpress.js`

/**
 * For testing: Clean data before importing new data.
 */
async function cleanData() {
  await client.mutate([
    {
      delete: {
        query: "*[_type == 'post']"
      }
    }
  ])
}

async function erasePosts(data) {
  await cleanData()
}

erasePosts(data).catch(err => {
  console.error(err)
  process.exit(1)
})