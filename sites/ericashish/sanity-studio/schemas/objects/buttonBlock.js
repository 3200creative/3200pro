export default {
    name: 'buttonBlock',
    title: 'Button Block',
    type: 'object',
    fields: [
        {
            name: 'buttons',
            type: 'array',
            title: 'Button(s)',
            of: [
                {
                    title: 'Button',
                    type: 'button',
                },
            ]
        },
        {
            name: 'position',
            type: 'string',
            title: 'Position',
            options: {
                list: [
                    {title: 'Default (Left)', value: 'default'},
                    {title: 'Left', value: 'left'},
                    {title: 'Center', value: 'center'},
                    {title: 'Right', value: 'right'},
                ],
                layout: 'radio',
                
            },
        }

    ],

}