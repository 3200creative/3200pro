export default {
  name: 'button',
  type: 'object',
  title: 'Button',
  fields: [
    {
      title: 'Button Text',
      name: 'buttonTxt',
      type: 'string',
    },
    {
      title: 'URL',
      name: 'href',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ['https', 'http', 'mailto', 'tel'],
        }),
    },
    {
      name: 'urlType',
      title: 'URL Type',
      type: 'string',
      options: {
        list: [
          { title: 'Site URL', value: 'siteUrl' },
          { title: 'External URL', value: 'externalUrl' },
          { title: 'Phone Number', value: 'phone' },
        ],
        layout: 'radio',
      },
      initialValue: {
        urlType: 'siteUrl',
      },
    },
    {
      name: 'buttonStyle',
      title: 'Button Style',
      decription: 'Optional',
      type: 'string',
      options: {
        list: [
          { title: 'Light', value: 'light' },
          { title: 'Dark', value: 'dark' },
        ],
      },
    },
  ],
}
