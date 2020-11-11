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
            type: 'array',
            title: 'Buttons',
            name: 'button',
            of: [{ type: 'button' }]
        },
    ],
}