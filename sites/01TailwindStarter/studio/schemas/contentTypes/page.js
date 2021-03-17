export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'navMenu',
      type: 'reference',
      title: 'Navigation menu',
      // weak: true, // Uncomment if you want to be able to delete navigation even though pages refer to it
      to: [{ type: 'menu' }],
      description: 'Which nav menu should be shown, if any',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Modular Content',
      of: [
        { type: 'modularTextBlock' },
        {
          type: 'splitContentWithImage',
          title: 'Hero - Split Content & Image',
        },
        { type: 'buttonBlock' },
        { type: 'button' },
        { type: 'figure', title: 'Image' },
        {
          type: 'ctaSimple',
          title: 'CTA - Simple',
        },
      ],
    },
    {
      name: 'blockContent',
      description:
        'Body Copy is another content layout option. In the event you add both Content Blocks and Body Content - Content Blocks will load first, followed by Body Copy.',
      type: 'blockContent',
      title: 'Block Content',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo-tools', // use seo-tools type
      options: {
        baseUrl: 'http://localhost:3333/', // (REQUIRED) This is the baseUrl for your site
        slug(doc) {
          // (REQUIRED) a function to return the sug of the current page, which will be appended to the baseUrl
          return doc.slug.current
        },
        fetchRemote: true, // Can be set to false to disable fetching the remote source (you will need to pass the content helpers for analysis)
        content(doc) {
          return 'simple html representation of your doc' // (OPTIONAL) If your site is generated after Sanity content updates you can use this for better real time feedback
        },
        title(doc) {
          return 'page title' // (OPTIONAL) return page title otherwise inferred from scrape
        },
        description(doc) {
          return 'page description' // (OPTIONAL) return page description otherwise inferred from scrape
        },
        locale(doc) {
          return 'page locale' // (OPTIONAL) return page locale otherwise inferred from scrape
        },
        contentSelector: 'blockContent', // (OPTIONAL) option to finetune where Yoast will look for the content. (only applicable for scraping without content function)
      },
    },
  ],
}
