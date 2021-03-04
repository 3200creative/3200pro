export default {
    name: "globalOptions",
    type: "document",
    title: "Global Options",
    fields: [
      {
        title: 'Music Post Featured Image',
        name: 'musicFeaturedImageHero',
        description: 'Show Featured Image Before Post Content?',
        type: 'boolean'
      },
      {
        title: 'Life Post Featured Image',
        name: 'lifeFeaturedImageHero',
        description: 'Show Featured Image Before Post Content?',
        type: 'boolean'
      },
      {
        title: 'Business Post Featured Image',
        name: 'businessFeaturedImageHero',
        description: 'Show Featured Image Before Post Content?',
        type: 'boolean'
      },
      {
        title: 'Tea Post Featured Image',
        name: 'teaFeaturedImageHero',
        description: 'Show Featured Image Before Post Content?',
        type: 'boolean'
      },
      {
        title: 'Music Color',
        name: 'musicColor',
        type: 'color'
      },
      {
        title: 'Tea Color',
        name: 'teaColor',
        type: 'color'
      },
      {
        title: 'Business Color',
        name: 'businessColor',
        type: 'color'
      },
      {
        title: 'Life Color',
        name: 'lifeColor',
        type: 'color'
      }

    ],
  }