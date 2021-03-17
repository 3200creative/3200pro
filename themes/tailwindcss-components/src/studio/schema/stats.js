export default{
    title: 'Stats',
    name: 'stats',
    type: 'object',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Sub Title',
            name: 'subTitle',
            type: 'text'
        },
        {
            title: 'Stats',
            name: 'stats',
            type: 'array',
            of: [
                {
                    title: 'stat',
                    type: 'titleSubTitle',
                    description: '4 or less statments work best.',
                }
            ]
        }
    ]

}