export default {
    name: 'footerSection',
    type: 'document',
    description: 'Footer Section',
    title: 'Footer Section',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'text',
            title: 'Text',
            type: 'blockContent'
        },
        {
            name: 'menu',
            title: 'Menu',
            type: 'reference',
            to: [{
                type: 'menu'
            }],
        }
    ]
}