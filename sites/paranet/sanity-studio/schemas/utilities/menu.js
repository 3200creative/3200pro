export default {
    name: 'menu',
    type: 'document',
    title: 'Menus',
    fields: [
        {
            name: 'title',
            type: 'string'
        },
        {
            type: 'array',
            name: 'items',
            of: [{ type: 'navItem' }]
        },
    ],
}