export default {
    title: 'Shuffle Text Block',
    name: 'shuffleTextBlock',
    type: 'object',
    description: 'Create mixture of shuffle text and normal text',
    fields: [
        {
            title: 'Text Section',
            name: 'textSection',
            type: 'array',
            of: [
                {
                    title: 'Text Sections',
                    name: 'shuffledTextSection',
                    type: 'shuffledTextSection'
                }
            ]
        },
    ],
    preview: {
    title: 'type'
    }
}