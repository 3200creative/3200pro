export default {
    title: 'Newsletter Optin',
    name: 'newsletterInContent',
    type: 'object',
    description: 'Please pick an existing optin or create a new one.',
    fields: [
        {
            name: 'existingNewsletterSignup',
            title: 'Existing Optin',
            type: 'reference',
            to: [{
                type: 'newsletterSignup'
            }]
        },
        {
            name: 'newsletterSignup',
            title: 'New Optin',
            type: 'newsletterSignup'
        }
    ],
    preview: {
        select: {
          title: 'title',
        },
        prepare: ({title}) => {
            return {
                title,
                subtitle: 'Newsletter Optin: Click flyout arrow to edit/delete'
            }
        }
    }
}