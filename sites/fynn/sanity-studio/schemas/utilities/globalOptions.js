export default {
    name: "globalOptions",
    type: "document",
    title: "Global Options",
    fields: [
      {
        title: 'Phone Number',
        name: 'phoneNumber',
        type: 'string'
      },
      {
        title: 'Contact Email',
        name: 'contactEmail',
        type: 'string'
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
    ],
  }