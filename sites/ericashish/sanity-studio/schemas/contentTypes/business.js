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
        title: 'podcast',
        name: 'podcast',
        type: 'reference',
        to: {
            type: 'podcast',
        },
        },  
        {
        name: 'featuredContent',
        type: 'array',
        title: 'Featured Image/Video',
        of: [
            {
                title: 'Featured Video',
                type: 'video', 
            },
            {
                title: 'Featured Image',
                type: 'featuredImage', 
            },
        ]
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