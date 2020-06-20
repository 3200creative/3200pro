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
            type: 'datetime'
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
    ],
}