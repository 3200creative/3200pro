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
        {
            name: 'relatedservice',
            title: 'FAQ Type',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    {title: 'General', value: 'General'},
                    {title: 'SSD', value: 'SSD'},
                    {title: 'Litigation', value: 'Litigation'},
                    {title: 'Auto Glass', value: 'Auto Glass'},
                    {title: 'Wills Trust Probate', value: 'Real Estate'},
                    {title: 'Business Advice', value: 'Business Advice'},
                    {title: 'Property Damage', value: 'Property Damage'},
                    {title: 'Long Term Disability', value: 'Long Term Disability'},
                ],
                layout: 'radio',
            },
        },
    ],
}