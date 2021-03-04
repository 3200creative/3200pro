export default {
    name: 'footer',
    type: 'document',
    title: 'Footer',
    fields: [
        {
            name: 'footerSection',
            title: 'Footer Sections',
            type: 'array',
            validation: Rule => Rule.required().min(1).max(6),
            of: [{
                type: 'footerSection'
            }],
        }
    ]
}