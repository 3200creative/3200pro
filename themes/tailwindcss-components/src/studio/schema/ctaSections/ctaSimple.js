import { string } from 'prop-types'

export default {
  title: 'CTA Simple Justified On Light Brand',
  name: 'ctaSimple',
  type: 'object',
  fields: [
    {
      title: 'Title Line 1',
      name: 'titleLine1',
      type: 'string',
    },
    {
      title: 'Title Line 2',
      name: 'titleLine2',
      type: 'string',
    },
    {
      title: 'Buttons',
      name: 'buttons',
      type: 'buttonBlock',
    },
  ],
}
