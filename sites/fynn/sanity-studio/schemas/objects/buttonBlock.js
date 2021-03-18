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
        }

    ],

}