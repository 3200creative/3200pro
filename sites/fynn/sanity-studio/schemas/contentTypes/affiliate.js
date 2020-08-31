export default {
  name: 'affiliate',
  type: 'document',
  title: 'Affiliate',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      title: 'URL',
      name: 'link',
      type: 'object',
      fields: [
        {
          title: 'URL',
          name: 'href',
          type: 'url',
          validation: Rule =>
            Rule.uri({
              allowRelative: true,
              scheme: ['https', 'http', 'mailto', 'tel'],
            }),
        },
        {
          title: 'Open in new tab?',
          name: 'blank',
          type: 'boolean',
        },
      ],
    },
  ],
}