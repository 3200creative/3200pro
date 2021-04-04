export default {
    name: 'business',
    type: 'document',
    title: 'Business',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96
            }
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            description: 'You can use this field to schedule post where you show them',
            type: 'datetime',
            validation: Rule =>
                Rule.error("Date Required").required(),
        },
        {
            title: 'Featured Image',
            name: 'featuredImage',
            type: 'featuredImage', 
        },
        {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: '3',
        },
        {
            name: 'blockContent',
            title: 'Content',
            type: 'blockContent'
        },
        
        {
            name: 'tags',
            title: 'Tags',
            type: 'tags'
        },
        {
            name: 'manualRelatedPosts',
            type: 'array',
            title: 'Manual Related Posts',
            description: 'This will overwrite the automatic related posts',
            of: [
              {
                type: 'reference',
                to: [
                    {type: 'music'},
                    {type: 'life'},
                    {type: 'business'},
                    {type: 'tea'}
                ]
              }
            ],
        },
        {
            title: 'Disable Related Posts',
            name: 'disableRelatedPosts',
            type: 'boolean'
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
          by: [
            {field: 'publishedAt', direction: 'desc'}
          ]
        },
        {
            title: 'By Date: Oldest -> Newest',
            name: 'archiveOrdering',
            by: [
              {field: 'publishedAt', direction: 'asc'}
            ]
          },
      ]
}