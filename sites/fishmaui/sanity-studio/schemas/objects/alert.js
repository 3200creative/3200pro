export default {
    name: 'alert',
    title: 'Alert',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Primary Message',
            type: 'text',
        },
        {
            name: 'subMessge',
            title: 'Sub Message',
            type: 'string',
        },
        {
            title: 'Optional URL',
            name: 'url',
            type: 'url',
            validation: Rule => Rule.uri({scheme: ['http', 'https', 'mailto', 'tel']}),
        },
    ]
}