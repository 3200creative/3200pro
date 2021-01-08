export default {
    name: 'button',
    type: 'object',
    title: 'Button',
    fields: [
        {
            title: 'Button Text',
            name: 'buttonTxt',
            type: 'string',
        },
        {
            title: 'URL',
            name: 'href',
            type: 'url',
            validation: Rule =>
              Rule.uri({
                allowRelative: true,
                scheme: ['https', 'http', 'mailto', 'tel'],
              }),
        },
        {
            name: 'urlType',
            title: 'URL Type',
            type: 'string',
            options: {
                list: [
                    {title: 'Site URL', value: 'siteUrl'},
                    {title: 'External URL', value: 'externalUrl'},
                    {title: 'Phone Number', value: 'phone'},
                ],
                layout: 'radio'
            },
            initialValue: {
                urlType: 'siteUrl'
            },
        },
        {
            name: 'menuImage',
            description: 'This is used for hero menus.',
            type: 'featuredImage',
            title: 'Menu Image'
        },
        {
            type: 'array',
            title: 'Optional Sub Buttons',
            description: '(Only used for navigational menus.)',
            name: 'subMenu',
            of: [{ type: 'subBtn' }]
        },
        {
            name: 'buttonStyle',
            title: 'Optional Paranet Button Styles',
            decription: 'Defaults to site styling.',
            type: 'string',
            options: {
                list: [
                    {title: 'Black: Outlined & Text', value: 'ghost1'},
                    {title: 'Orange: Outlined, Black: Text', value: 'ghost2'},
                    {title: 'Orange: Background, White: Text', value: 'solid1'},
                    {title: 'standard', value: 'siteUrl'},
                    {title: 'standard', value: 'siteUrl'},
                ],
            }
        },
        {
            name: 'arrow',
            title: 'Optional Arrows',
            decription: 'If you are using multiple buttons only use inset options',
            type: 'string',
            options: {
                list: [
                    {title: 'Inset: Chevron Right', value: 'chevR'},
                    {title: 'Inset: Chevron Down', value: 'chevD'},
                    {title: 'Long Right Arrow', value: 'lra'},
                    {title: 'Long Down Arrow', value: 'lda'},
                    {title: 'Orange: Background, White: Text', value: 'solid1'},
                    {title: 'standard', value: 'siteUrl'},
                    {title: 'standard', value: 'siteUrl'},
                ],
            }
        },
        {
            type: 'boolean',
            name: 'uppercase',
            title: 'uppercase'
        }
        
    ]
}