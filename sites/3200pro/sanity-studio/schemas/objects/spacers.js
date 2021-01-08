export default {
  title: 'Spacers',
  name: 'spacer',
  type: 'object',
  fields: [
    {
      name: 'spacerType',
      title: 'Spacer Type',
      type: 'string',
      value: 'clear',
      options: {
        list: [
          { title: 'Clear', value: 'clear' },
          { title: 'Line', value: 'clearline' },
        ],
        layout: 'radio',
      }, 
    },
    {
      name: 'my',
      title: 'Vertical Space',
      type: 'string',
      value: '2rem',
      options: {
        list: [
          { title: 'None', value: '0' },
          { title: 'Small', value: '2rem' },
          { title: 'Medium', value: '4rem' },
          { title: 'Large', value: '5rem' },
        ],
        layout: 'radio',
      }, 
    },
  ],  
};
