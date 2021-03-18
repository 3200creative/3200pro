export default {
    name: 'homepage',
    type: 'document',
    title: 'Homepage',
    fields: [
        {
            name: 'header',
            title: 'Header Text',
            type: 'string'
        },
        {
            name: 'subTitleText',
            title: 'Sub Title',
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