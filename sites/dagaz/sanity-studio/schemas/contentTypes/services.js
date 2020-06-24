import {format} from 'date-fns'

export default {
  name: 'services',
  type: 'document',
  title: 'Services',
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
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing'
    },
    {
      name: 'featuredImage',
      type: 'featuredImage',
      title: 'Featured Image'
    },
    {
      name: 'pattern',
      type: 'featuredImage',
      title: 'Pattern'
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
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [
        {
          type: 'authorReference'
        }
      ]
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
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare ({title = 'No title', publishedAt, slug = {}, media}) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}