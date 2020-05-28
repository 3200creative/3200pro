export default {
    name: 'music',
    type: 'document',
    title: 'Music',
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
            title: 'Soundcloud URL',
            name: 'href',
            type: 'url',
            validation: Rule => Rule.uri({scheme: ['http', 'https', 'mailto', 'tel']}),
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
            title: 'Introduction',
            type: 'blockContent'
        },
        {
            title: 'Additional Content',
            name: 'additionalContent',
            type: 'blockContent',
        },
        {
            name: 'gallery',
            type: 'array',
            title: 'Gallery',
            of: [
                {
                    title: 'Image',
                    type: 'figure', 
                },
            ]
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