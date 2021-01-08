import {format} from 'date-fns'

export default {
  name: 'post',
  type: 'document',
  title: 'Blog Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing'
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }]
    },
    {
      name: 'featuredImage',
      type: 'featuredImage',
      title: 'Featured Image'
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.'
    },
    {
      name: 'blockContent',
      type: 'blockContent',
      title: 'Body'
    },
    {
      name: 'manualRelatedPosts',
      type: 'array',
      title: 'Manual Related Posts',
      description: 'This will overwrite the automatic related posts',
      of: [
        {
          type: 'reference',
          to: {
            type: 'post'
          }
        }
      ],
    },
    {
      name: 'relatedPostCount',
      title: 'Related Product Count',
      type: 'number'
    },
    {
      title: 'Disable Related Posts',
      name: 'disableRelatedPosts',
      type: 'boolean'
    },
    {
      name: 'manualRelatedProducts',
      type: 'array',
      title: 'Manual Related Products',
      description: 'This will overwrite the automatic related posts',
      of: [
        {
          type: 'reference',
          to: {
            type: 'product'
          }
        }
      ],
    },
    {
      name: 'relatedProductCount',
      title: 'Related Product Count',
      type: 'number'
    },
    {
      title: 'Disable Related Products',
      name: 'disableRelatedProducts',
      type: 'boolean'
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo-tools', // use seo-tools type
      options: {
          baseUrl: 'http://localhost:3333/', // (REQUIRED) This is the baseUrl for your site
          slug(doc) { // (REQUIRED) a function to return the sug of the current page, which will be appended to the baseUrl
              return doc.slug.current;
          },
          fetchRemote: true, // Can be set to false to disable fetching the remote source (you will need to pass the content helpers for analysis)
          content(doc) {
              return 'simple html representation of your doc'; // (OPTIONAL) If your site is generated after Sanity content updates you can use this for better real time feedback
          },
          title(doc) {
              return 'page title'; // (OPTIONAL) return page title otherwise inferred from scrape
          },
          description(doc) {
              return 'page description'; // (OPTIONAL) return page description otherwise inferred from scrape
          },
          locale(doc) {
              return 'page locale'; // (OPTIONAL) return page locale otherwise inferred from scrape
          },
          contentSelector: 'blockContent' // (OPTIONAL) option to finetune where Yoast will look for the content. (only applicable for scraping without content function)
      },
    }
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
}