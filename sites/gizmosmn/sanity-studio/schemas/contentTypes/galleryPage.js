export default {
    name: 'galleryPage',
    type: 'document',
    title: 'Custom Car Showcase',
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
            name: 'featuredImage',
            title: 'Featured Image',
            type: 'featuredImage'
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