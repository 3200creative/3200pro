export default {
  name: 'vendor',
  type: 'document',
  title: 'Vendor',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'logo',
      type: 'featuredImage',
      title: 'Logo'
    },
    {
      title: 'URL',
      name: 'href',
      type: 'url',
      description: 'If the link is external it must include http:// or https:// otherwise it will link to an internal page of the website.',
      validation: Rule =>
        Rule.uri({
          allowRelative: true,
          scheme: ['https', 'http', 'mailto', 'tel'],
        }),
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.'
    },
    {
      name: 'blockContent',
      type: 'blockContent',
      title: 'Body'
    }
  ],
}