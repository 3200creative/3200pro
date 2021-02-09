export default {
  name: 'teamMember',
  type: 'document',
  title: 'Team Member',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'featuredImage',
    },
    {
      name: 'blockContent',
      type: 'blockContent',
      title: 'Bio',
    },
  ],
}
