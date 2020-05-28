export default {
    name: 'life',
    type: 'document',
    title: 'Life',
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
            name: 'sections',
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
        {
            name: 'seo',
            title: 'SEO Title And Description',
            type: 'meta',            
        },
    ],
}