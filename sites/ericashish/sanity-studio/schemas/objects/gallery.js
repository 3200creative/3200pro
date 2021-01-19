export default {
    name: 'gallery',
    type: 'object',
    title: 'Gallery Images',
    fields: [
        {
          name: 'gallerySize',
          title: 'Gallery Size',
          type: 'string',
          options: {
              list: [
                  {title: 'Standard Width', value: 'standardWidth'},
                  {title: 'Full Width', value: 'fullWidth'},
              ]
          },
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