export default {
    name: 'menu',
    type: 'document',
    title: 'Menus',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'iconMenu',
            title: 'Icon Menu',
            type: 'boolean'
        },
        {
            type: 'array',
            title: 'Buttons',
            name: 'button',
            of: [{ type: 'button' }]
        },
    ],
}