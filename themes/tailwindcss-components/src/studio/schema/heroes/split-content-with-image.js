export default {
  title: 'Split Content With Image',
  name: 'splitContentWithImage',
  type: 'object',
  fields: [
    {
      title: 'Title - Line 1',
      name: 'title1',
      type: 'string',
    },
    {
      title: 'Title - Line 2',
      name: 'title2',
      type: 'string',
    },
    {
      title: 'Sub Title',
      name: 'subTitle',
      type: 'text',
      rows: 3,
    },
    {
      title: 'Buttons',
      name: 'buttons',
      type: 'buttonBlock',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'figure',
    },
  ],
}
