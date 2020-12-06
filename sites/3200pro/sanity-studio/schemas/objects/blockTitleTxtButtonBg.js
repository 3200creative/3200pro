export default{
    title: 'Title, Text, Button, Background',
    name: 'blockTitleTxtButtonBg',
    type: 'object',
    fields: [
        {
            title:'Title',
            name: 'title',
            type: 'string',
        },
        {
            title:'Text',
            name: 'text',
            type: 'simplePortableText',
        },
        {
            title: 'Button(s)',
            name: 'buttons',
            type: 'buttonBlock'
        },
        {
            title: 'Background',
            name: 'background',
            type: 'figure'
        },
    ]
}