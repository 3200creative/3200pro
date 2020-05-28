export default {
    name: 'galleryArchive',
    type: 'document',
    title: 'Gallery Archive Text',
    fields: [
        {
            name: 'header',
            title: 'Header Text',
            type: 'string'
        },
        {
            name: 'heroImage',
            title: 'First Background Image',
            type: 'featuredImage'
        },
        {
            name: 'blockContent',
            title: 'Content',
            type: 'blockContent'
        },
        {
            name: 'seo',
            title: 'SEO Title And Description',
            type: 'meta',            
        },
    ],
}