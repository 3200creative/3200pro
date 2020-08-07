export default {
    name: "newsletterSignup",
    type: "document",
    title: "Newsletter Signup",
    fields: [
      {
        name: 'headline',
        title: 'Headline',
        type: 'string',
      },
      {
        name: 'subheading',
        title: 'Subheading',
        type: 'string',
      },
      {
        name: 'mailchimpSignupConfirmation',
        title: 'Mailchimp Sign Up Confirmation',
        type: 'string',
        description: 'Example: Thanks for signing up to my newsletter!'
      },
      {
        name: 'mailchimpSignupError',
        title: 'Mailchimp Sign Up Error',
        type: 'string',
        description: 'Example: There was an error with your signup.'
      },
    ],
  }