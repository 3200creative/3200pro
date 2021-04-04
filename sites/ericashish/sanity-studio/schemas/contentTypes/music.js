export default {
  name: 'music',
  type: 'document',
  title: 'Music',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      description:
        'You can use this field to schedule post where you show them',
      type: 'datetime',
      validation: (Rule) => Rule.error('Date Required').required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: '3',
    },
    {
      title: 'Featured Image',
      name: 'featuredImage',
      type: 'featuredImage',
    },
    {
      name: 'blockContent',
      title: 'Content',
      type: 'blockContent',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'tags',
    },
    {
      name: 'randomPostList',
      type: 'randomPostList',
      title: 'Random Post List',
    },
    {
      name: 'random',
      type: 'random',
      title: 'Random',
    },
    {
      title: 'Disable Related Posts',
      name: 'disableRelatedPosts',
      type: 'boolean',
    },
    {
      name: 'seo',
      title: 'SEO Title And Description',
      type: 'meta',
    },
  ],
  orderings: [
    {
      title: 'By Date: Newest -> Oldest',
      name: 'archiveOrdering',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'By Date: Oldest -> Newest',
      name: 'archiveOrdering',
      by: [{ field: 'publishedAt', direction: 'asc' }],
    },
  ],
}
