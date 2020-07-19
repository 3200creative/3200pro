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
        
    ]
}