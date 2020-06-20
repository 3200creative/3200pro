export default {
    name: 'practiceArea',
    type: 'document',
    title: 'Practice Areas',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'blockContent',
            type: 'blockContent',
            title: 'Body'
        },
        {
            name: 'seo',
            title: 'SEO Title And Description',
            type: 'meta',            
        },
    ],
}