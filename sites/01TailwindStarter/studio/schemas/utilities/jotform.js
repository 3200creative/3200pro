import React from 'react'
export default {
    name: 'jotform',
    title: 'Jotform',
    type: 'document',
    fields: [
        {
            title: 'Form Title',
            name: 'formTitle',
            type: 'string'
        },
        {
            title: "Form URL",
            name: 'formURL',
            description: 'Example: https://form.jotform.com/210135257372045',
            type: 'string'
        }
    ]
}