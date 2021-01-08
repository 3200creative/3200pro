export default {
    title: 'Shuffled Text Section',
    name: 'shuffledTextSection',
    type: 'object',
    fields: [
        {
            title: 'Phrase',
            type: 'array',
            name: 'phrase',
            of: [
                {
                    title: 'Shuffled Text',
                    name: 'shuffledText',
                    type: 'shuffledText'
                },
                {
                    title: 'Standard Text',
                    name: 'standardText',
                    type: 'standardText'
                },
            ],
        },
        {
            title: 'Text Style',
            name: 'textStyle',
            type: 'string',
            options: {
                list: [
                    {title: 'None', value: 'span'},
                    {title: 'Strong', value: 'h1'},
                    {title: 'Large', value: 'h2'},
                    {title: 'XLarge', value: 'h3'},
                    {title: 'XXLarge', value: 'h4'},
                ],
            }
        }
    ],
    preview: {
        prepare(selection) {
          const title = 'Text Shuffler'
          return {
            title: title,
          }
        }
      }
}