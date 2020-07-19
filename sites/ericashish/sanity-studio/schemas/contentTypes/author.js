
export default {
    name: 'author',
    type: 'document',
    title: 'Author',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        description: 'Some frontends will require a slug to be set to be able to show the person',
        options: {
          source: 'name',
          maxLength: 96
        }
      },
      {
        name: 'image',
        type: 'figure',
        title: 'Image'
      },
      {
        name: 'bio',
        type: 'bioPortableText',
        title: 'Biography'
      },
      {
        name: 'teaBio',
        type: 'bioPortableText',
        title: 'Tea Biography'
      },
      {
        name: 'musicBio',
        type: 'bioPortableText',
        title: 'Music Biography'
      },
      {
        name: 'lifeBio',
        type: 'bioPortableText',
        title: 'Life Biography'
      },
      {
        name: 'businessBio',
        type: 'bioPortableText',
        title: 'Business Biography'
      },
      {
        name: 'altBio1',
        type: 'bioPortableText',
        title: 'Alt Bio 1'
      },
      {
        name: 'altBio2',
        type: 'bioPortableText',
        title: 'Alt Bio 2'
      },
      {
        name: 'altBio3',
        type: 'bioPortableText',
        title: 'Alt Bio 3'
      },
    ],
  }