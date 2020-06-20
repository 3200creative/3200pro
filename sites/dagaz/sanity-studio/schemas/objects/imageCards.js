export default {
    name: 'imageCard',
    type: 'object',
    title: 'Image Card',
    fields: [
        {
            name: 'imageCards',
            type: 'array',
            title: 'Image Cards',
            of: [
                {
                    title: 'Image',
                    type: 'figure', 
                },
            ]
        },
    ],
}