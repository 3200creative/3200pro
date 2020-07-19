export default {
    name: 'faq',
    type: 'document',
    title: 'FAQ',
    fields: [
        {
            name: 'title',
            title: 'Question',
            type: 'string'
        },
        {
            name: 'blockContent',
            type: 'blockContent',
            title: 'Answer'
        },
    ],
}