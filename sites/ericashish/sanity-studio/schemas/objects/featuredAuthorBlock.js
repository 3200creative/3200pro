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
            title: 'Author Bio Type',
            name: 'authorBlockBio',
            type: 'string',
            options: {
                list: [
                    {title: 'Standard', value: 'bio'},
                    {title: 'Tea Bio', value: 'teaBio'},
                    {title: 'Music Bio', value: 'musicBio'},
                    {title: 'Life Bio', value: 'lifeBio'},
                    {title: 'Business Bio', value: 'businessBio'},
                    {title: 'Alt Bio1', value: 'altBio1'},
                    {title: 'Alt Bio2', value: 'altBio2'},
                    {title: 'Alt Bio3', value: 'altBio3'},
                ]
            }

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

        },
    ],
    preview: {
        select: {
          title: 'author.name',
          subtitle: 'authorBlockBio',
          media: 'author.image'
        }
    }
}