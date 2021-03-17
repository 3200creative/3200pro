import { object } from "prop-types";

export default {
    name: 'meta',
    title: 'Meta Title/Desc',
    type: 'object',
    fields: [
        {
            tilte: 'Meta Title',
            name: 'metaTitle',
            type: 'string'
        },
        {
            tilte: 'Meta Description',
            name: 'metaDesc',
            type: 'text',
            rows: 3,
        },

    ]
}