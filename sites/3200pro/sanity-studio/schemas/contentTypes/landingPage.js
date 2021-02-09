export default {
  name: 'landingPage',
  type: 'document',
  title: 'Landing Pages',
  fields: [
    {
      name: 'adminTitle',
      title: 'Admin Title',
      description: 'This is not published',
      type: 'string',
    },
    {
      name: 'displayedTitle',
      title: 'Displayed Title',
      type: 'string',
    },
    {
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
    },
    {
      name: 'heroText',
      title: 'Hero Text',
      type: 'blockContent',
      rows: 1,
      description: '(Typically Contact Methods)',
    },
    {
      name: 'heroMenu',
      title: 'Hero Menu',
      type: 'reference',
      to: [{ type: 'menu' }],
    },
    {
      title: 'Hero Image',
      name: 'heroImage',
      type: 'featuredImage',
    },
    {
      name: 'blockContent',
      type: 'blockContent',
      title: 'Body',
    },
    {
      name: 'seo',
      title: 'SEO Title And Description',
      type: 'meta',
    },
  ],
}
