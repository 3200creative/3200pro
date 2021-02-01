export default {
    name: "globalOptions",
    type: "document",
    title: "Global Options",
    fields: [
      {
        title: 'Contact Email',
        name: 'contactEmail',
        type: 'string'
      },
      {
        name: 'featuredImage',
        type: 'featuredImage',
        description: `In the event a featured image isn't selected, this image will be used.`,
        title: 'Fallback Featured Image For Archives'
      },
      {
        name: 'globalNavMenu',
        type: 'reference',
        title: 'Global Primary Navgation Menu',
        // weak: true, // Uncomment if you want to be able to delete navigation even though pages refer to it
        to: [{ type: 'menu' }],
        description: 'Header menu will default to this menu unless a specific menu is selected on a page-by-page basis.',
      },
      {
        name: 'singleProductMenu',
        type: 'reference',
        title: 'Single Product Primary Navgation Menu',
        // weak: true, // Uncomment if you want to be able to delete navigation even though pages refer to it
        to: [{ type: 'menu' }],
        description: 'Header menu will default to this menu unless a specific menu is selected on a page-by-page basis.',
      },
      {
        name: 'footerMessage',
        type: 'text',
        rows: 3,
        title: 'Footer Message'
      }
    ],
  }