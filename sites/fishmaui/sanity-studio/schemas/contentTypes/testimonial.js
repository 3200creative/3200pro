export default {
    name: 'testimonial',
    type: 'document',
    title: 'Testimonials',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'blockContent',
            type: 'blockContent',
            title: 'Body'
        },
        {
            name: 'source',
            title: 'Source',
            type: 'string'
        },
    ],
}