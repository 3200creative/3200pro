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
      name: 'tagline',
      type: 'simpleBlockContent'
    },
    {
      name: 'illustration',
      title: 'Image',
      type: 'illustration'
    },
    {
      title: 'Hero Navigation',
      name: 'heroNavigation',
      description: 'A menu must be created prior to inclusion.',
      type: 'reference',
      to: {
        type: 'menu'
      }
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
