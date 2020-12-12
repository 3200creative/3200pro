const path = require(`path`)

// Schema generation for subMenu array

exports.createSchemaCustomization = ({ actions }) => {
  const { createFieldExtension, createTypes } = actions
  createFieldExtension({
    name: `defaultArray`,
    extend() {
      return {
        resolve(source, args, context, info) {
          if (source[info.fieldName] == null) {
            return []
          }
          return source[info.fieldName]
        },
      }
    },
  })
  const typeDefs = `
    type Site implements Node {
      siteMetadata: SiteMetadata
    }
    type SiteMetadata {
      menuLinks: [MenuLinks]
    }
    type MenuLinks {
      name: String
      link: String
      subMenu: [SubMenu] @defaultArray
    }
    type SubMenu {
      name: String
      link: String
    }
  `
  createTypes(typeDefs)

}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const galleryPageTemplate = path.resolve(`./src/components/gallery-page-template.js`)
  return graphql(`
    query loadPagesQuery($limit: Int!) {
      allSanityGalleryPage(
        limit: $limit
        filter: { slug: { current: { ne: null } }}
        ) {
        edges {
          node {
            id
            title
            ccSlug {
              current
            }
            
          }
        }
      }
    }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allSanityGalleryPage.edges.forEach(edge => {
      const id = edge.node.id
      const slug = edge.node.ccSlug.current
      const path = `custom-car-shop-showcase/${slug}/`
      createPage({
        // Path for this page — required
        path,
        component: galleryPageTemplate,
        context: {id},
      })
    })
  })
}