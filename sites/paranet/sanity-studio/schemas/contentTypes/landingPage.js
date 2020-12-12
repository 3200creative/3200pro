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
            name: 'title',
            title: 'Displayed Title',
            type: 'string'
        },
        {
            name: 'navMenu',
            type: 'reference',
            title: 'Navigation menu',
            // weak: true, // Uncomment if you want to be able to delete navigation even though pages refer to it
            to: [{ type: 'menu' }],
            description: 'Which nav menu should be shown, if any',
          },
        {
            name: 'content',
            type: 'array',
            title: 'content',
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