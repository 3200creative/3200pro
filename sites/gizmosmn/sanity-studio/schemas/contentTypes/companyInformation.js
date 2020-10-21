export default {
    name: "companyInformation",
    type: "document",
    title: "Company Information",
    fields: [
      {
        name: "companyName",
        type: "string",
        title: "Company Name",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "phone",
        type: "string",
        title: "Phone Number",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "streetAddress",
        type: "string",
        title: "Street Address",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "city",
        type: "string",
        title: "City",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "state",
        type: "string",
        title: "State",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "zip",
        type: "string",
        title: "Zip",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "localBusinessRadius",
        description: 'In miles ex: 90',
        type: "number",
        title: "Business Radius",
        validation: (Rule) => Rule.required(),
      },
      {
        title: "Logo",
        name: "logo",
        type: "figure",
        validation: (Rule) => Rule.required(),
      },
      {
        title: "Alternate Logo",
        name: "alternateLogo",
        type: "figure",
        description: "If you have a dark logo often it is nice to have a light version as well."
      },
      {
        title: "Default Social Sharing Image",
        name: "seoImage",
        type: "figure",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "siteUrl",
        type: "url",
        title: "Site URL",
        description:
          "The root url of your website, e.g. https://localizedpro.com",
        validation: (Rule) => Rule.required(),
      },
    ],
  }