export default {
    name: 'aboutPage',
    type: 'document',
    title: 'About Page',
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