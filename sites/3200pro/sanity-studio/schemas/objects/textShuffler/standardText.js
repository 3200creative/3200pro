export default {
        title: 'Text',
        name: 'standardText',
        type: 'object',
        fields: [
            {
                title: 'String',
                name: 'string',
                type: 'string'
            },
            {
                title: 'Text Style',
                name: 'textStyle',
                type: 'string',
                options: {
                    list: [
                        {title: 'None', value: 'span'},
                        {title: 'Strong', value: 'strong'},
                        {title: 'Italic', value: 'italic'},
                        {title: 'H1', value: 'h1'},
                        {title: 'H2', value: 'h2'},
                        {title: 'H3', value: 'h3'},
                        {title: 'H4', value: 'h4'},
                        {title: 'H5', value: 'h5'},
                    ]
                }
            },
            {
                title: 'Text Size',
                name: 'textSize',
                type: 'number',
                validation: Rule =>
                Rule.error("Please select a size").required(),
                options: {
                    list: [
                        {title: 'Standard', value: 1},
                        {title: 'Large', value: 3},
                        {title: 'XLarge', value: 5},
                        {title: 'XXLarge', value: 7}                ]
                }
            }
    
        ]
}