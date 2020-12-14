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
            title: 'Icon',
            description: 'Ex: FaFacebookF from: https://react-icons.github.io/react-icons/icons?name=fa',
            name: 'icon',
            type: 'string',
        },
        {
            title: 'Button Color',
            name: 'buttonColor',
            type: 'color'
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
    ]
}