import crypto from 'crypto'
import fetch from 'node-fetch'
import client from 'part:@sanity/base/client'
import util from 'util'

/**
 * Console.log deep nested objects
 * @param {*} obj
 */
export function trace(obj) {
  console.log(util.inspect(obj, false, null, true /* enable colors */))
}

/**
 * Upload image or retrieve from sanity database based on Sha1 hash.
 * @param {String} url
 */
export async function uploadImage(url) {
  const image = await fetch(url)
  const buffer = await image.buffer()
  const hash = crypto.createHash('sha1')
  hash.update(buffer)
  const hashKey = hash.digest('hex')

  const imageQuery = await client.fetch(`*[_type == 'sanity.imageAsset' && sha1hash=='${hashKey}']`)
  if (imageQuery.length > 0) {
    console.log('- File already uploaded ' + url)
    return imageQuery[0]
  }
  console.log('- Uploading file ' + url)
  return client.assets.upload('image', buffer)
}

function sanitizeHtml(html) {
  return html.replace(/<!--(.*?)-->/g, '').replace(/\n/g, '')
}
