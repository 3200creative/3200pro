const blockTools = require('@sanity/block-tools').default
const jsdom = require('jsdom')

const { JSDOM } = jsdom

const defaultSchema = require('./defaultSchema')

const blockContentType = defaultSchema.get('blogPost').fields.find(field => field.name === 'body')
  .type

function parseHTML(HTMLDoc) {
  const rules = [
    {
      // embed videos with special figure format
      deserialize(el, next, block) {
        if (el.tagName.toLowerCase() !== 'figure') {
          return undefined
        }

        const wrapper = el.querySelector('.wp-block-embed__wrapper')
        if (!wrapper) {
          return undefined
        }

        const url = wrapper.innerHTML.trim()
        const urlLower = url.toLowerCase()

        if (!url || !url.includes('://')) {
          console.error("WARNING : Couldn't get video url:", el.innerHTML)
          return undefined
        }

        let provider = 'other'
        if (urlLower.includes('youtube.com') || urlLower.includes('youtu.be')) {
          provider = 'youtube'
        } else if (urlLower.includes('vimeo.com')) {
          provider = 'vimeo'
        }

        return block({
          _type: 'videoEmbed',
          url,
          provider
        })
      }
    },
    // images
    {
      deserialize(el, next, block) {
        if (el.tagName.toLowerCase() !== 'figure') {
          return undefined
        }

        const img = el.querySelector('img')
        const caption = el.querySelector('figcaption')
        const link = el.querySelector('a')

        if (!img) {
          console.error("WARNING : Couldn't find image inside figure: ", el.innerHTML)
          return
        }
        return block({
          _type: 'figure',
          image: {
            // using the format for importing assets via the CLI
            // https://www.sanity.io/docs/data-store/importing-data#import-using-the-cli
            _sanityAsset: `image@${img.getAttribute('src')}`
          },
          alt: img.getAttribute('alt'),
          caption: caption ? caption.textContent : undefined,
          link: link ? link.getAttribute('href') : undefined
        })
      }
    },
    {
      // Special case for code blocks (wrapped in pre and code tag)
      deserialize(el, next, block) {
        if (!el) {
          return undefined
        }
        if (el.tagName.toLowerCase() !== 'pre') {
          return undefined
        }
        const code = el.children[0]

        const childNodes =
          code && code.tagName.toLowerCase() === 'code' ? code.childNodes : el.childNodes
        let text = ''
        childNodes.forEach(node => {
          text += node.textContent
        })
        /**
         * use `block()` to add it to the
         * root array, instead of as
         * children of a block
         *  */

        return block({
          _type: 'code',
          language: el.dataset.language,
          text
        })
      }
    }
  ]
  /**
   * Since we're in a node context, we need
   * to give block-tools JSDOM in order to
   * parse the HTML DOM elements
   */
  return HTMLDoc
    ? blockTools.htmlToBlocks(HTMLDoc, blockContentType, {
        rules,
        parseHtml: html => new JSDOM(html).window.document
      })
    : []
}

module.exports = parseHTML