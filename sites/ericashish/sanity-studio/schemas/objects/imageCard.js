export default {
    name: 'imageCard',
    type: 'object',
    title: 'Image Card',
    fields: [
        {
        name: 'blockImage',
        title: 'Block Image',
        type: 'image',
        options: {
            hotspot: true,
        },
        },
        {
        title: "Title",
        name: "title",
        type: "string",
        options: [
            {isHighlighted: true},
            {
            list: [
                {title: 'H2', value: 'h2'},
                {title: 'H3', value: 'h3'},
                {title: 'H4', value: 'h4'},
            ], // <-- predefined values
            layout: 'radio'
            },
        ],
        },
        {
        title: 'Text',
        name: 'text',
        type: 'portableTextMin',
        },
        {
        name: "alt",
        type: "string",
        title: "Alternative text",
        validation: Rule =>
            Rule.error("You have to fill out the alternative text.").required(),
        description: "Important for SEO and accessiblity.",
        options: {
            isHighlighted: true,
        },
        },
        {
        title: 'Optional Image & Title URL',
        name: 'href',
        type: 'url',
        validation: Rule =>
            Rule.uri({
            allowRelative: true,
            scheme: ['https', 'http', 'mailto', 'tel'],
            }),
        },
        {
        title: 'Buttons',
        name: 'cardButtons',
        type: 'buttonBlock',
        },
    ],
    preview: {
        select: {
        imageUrl: "asset.url",
        title: "alt",
        },
    },     
}