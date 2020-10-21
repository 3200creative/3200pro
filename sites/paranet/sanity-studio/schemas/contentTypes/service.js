export default {
  name: 'service',
  type: 'document',
  title: 'Service',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
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
        name: 'serviceType',
        title: 'Service Type',
        type: 'reference',
        to: [
          {
            type: 'serviceType'
          }
        ]
      },
    {
      name: 'featuredImage',
      type: 'featuredImage',
      title: 'Featured Image'
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Service Page Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.'
    },

    {
      name: 'homepageExcerpt',
      type: 'excerptPortableText',
      title: 'Homepage Excerpt',
      description:
        'While this can be similar to the Service Page Excerpt, it should be different. This will allow more unique content on your website.'
    },
    {
      name: 'blockContent',
      type: 'blockContent',
      title: 'Body'
    },
    {
      name: 'seo',
      title: 'SEO Title And Description',
      type: 'meta',            
  },
  ]}