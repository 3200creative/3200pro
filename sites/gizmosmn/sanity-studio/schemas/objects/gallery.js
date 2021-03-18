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
        {
            name: 'disableLightbox',
            title: 'Disable Lightbox',
            type: 'boolean',
        },
        {
            name: 'column',
            title: 'Gallery Columns',
            type: 'string',
            options: {
                list: [
                    {title: '1', value: '100%'},
                    {title: '2', value: '50%'},
                    {title: '3', value: '33%'},
                    {title: '4', value: '25%'}
                ],
                layout: 'radio'
            }
        },
    ],
}