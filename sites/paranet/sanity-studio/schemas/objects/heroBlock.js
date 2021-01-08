export default {
  type: 'object',
  name: 'heroBlock',
  title: 'Hero',
  fields: [

    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'shuffledTextSection',
      type: 'Shuffled Text Section',
      type: 'shuffledTextSection'
    },
    {
      name: 'tagline',
      type: 'simpleBlockContent'
    },
    {
      name: 'illustration',
      type: 'illustration'
    },
    {
      title: 'Nav Item',
      name: 'navItem',
      type: 'navItem'
    }
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'label',
      disabled: 'disabled'
    },
    prepare({ title, disabled }) {
      return {
        title: `Hero: ${disabled ? 'DISABLED' : title}`
      }
    }
  }
}
