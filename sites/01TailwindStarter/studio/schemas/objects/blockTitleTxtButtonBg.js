export default{
    title: 'Title, Text, Button, Background',
    name: 'blockTitleTxtButtonBg',
    type: 'object',
    fields: [
        {
            title: 'Temporarily Disable/Hide This Section',
            name: 'disabled',
            type: 'boolean'
        },
        {
            title: 'Layout Style',
            name: 'layout',
            type: 'string',
            options: {
                list: [
                    {title: 'Content L | Image R', value: 'cL'},
                    {title: 'Content R | Image L', value: 'cR'},
                ],
                layout: 'radio'
            }
        },
        {
            title:'Title',
            name: 'title',
            type: 'string',
        },
        {
            title:'Subtitle',
            name: 'subtitle',
            type: 'string',
        },
        {
            title:'Text',
            name: 'text',
            type: 'simplePortableText'
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
    ],
    preview: {
        select: {
          title: 'title',
          subtitle: 'label',
          disabled: 'disabled'
        },
        prepare({ title, disabled }) {
          return {
            title: `Title, Txt, Btn: ${disabled ? 'DISABLED' : title}`
          }
        }
    }
}