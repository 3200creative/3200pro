export default {
    name: 'simpleUrl',
    title: 'URL',
    type: 'object',
    fields: [
        {
            title: 'Url',
            name: 'url',
            type: 'url',
            validation: Rule => Rule.uri({scheme: ['http', 'https', 'mailto', 'tel']}),
        },
    ]
}