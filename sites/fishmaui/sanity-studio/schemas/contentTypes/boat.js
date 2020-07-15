export default {
    name: 'boat',
    type: 'document',
    title: 'Boat',
    fields: [
        {
            name: 'title',
            title: 'Admin Title',
            type: 'string'
        },
        {
            name: 'displayedTitle',
            title: 'Displayed Title',
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