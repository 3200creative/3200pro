export default {
    name: 'subBtn',
    type: 'object',
    title: 'Sub Button',
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
        
    ]
}