export default {
    name: 'featuredAuthor',
    type: 'object',
    title: 'Featured Author',
    fields: [
        {
            title: 'Author',
            name: 'author',
            type: 'reference',
            to: {type: 'author'},
        },
        {
            title: 'Author Block Size',
            name: 'authorBlockSize',
            type: 'string',
            options: {
                list: [
                    {title: 'Small', value: 'small'},
                    {title: 'Large', value: 'large'},
                ]
            }

        }
    ],
}