export default {
    title: 'Quote',
    name: 'quote',
    type: 'object',
    fields: [
        {
            name: 'text',
            title: 'Text',
            type: 'text',
            rows: 3,
        },
        {
            name: 'author',
            title: 'Author',
            type: 'string',
        },
        {
            title: 'Optional Author URL',
            name: 'authorURL',
            type: 'simpleUrl',
            validation: Rule => Rule.uri({scheme: ['http', 'https', 'mailto', 'tel']}),
        },
    ]
}