export default {
    name: 'landingPage',
    type: 'document',
    title: 'Landing Pages',
    fields: [
        {
            name: 'adminTitle',
            title: 'Admin Title',
            description: 'This is not published',
            type: 'string'
        },
        {
            name: 'displayedTitle',
            title: 'Displayed Title',
            type: 'string'
        },
        {
            name: 'pageBuilder',
            type: 'array',
            title: 'Page Builder',
            of: [
                { type: 'modularContent'},
                { type: 'buttonBlock'},
                { type: 'button'},
                { type: 'figure', title: 'Image'},
            ]
        },
        {
            name: 'seo',
            title: 'SEO Title And Description',
            type: 'meta',            
        },
    ],
}