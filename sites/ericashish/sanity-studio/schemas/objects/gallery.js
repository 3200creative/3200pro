export default {
    name: 'gallery',
    type: 'object',
    title: 'Gallery Images',
    fields: [
        {
            name: 'gallery',
            type: 'array',
            title: 'Gallery',
            of: [
                {
                    title: 'Image',
                    type: 'figure', 
                },
            ]
        },
    ],
}