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
  ],  
};
