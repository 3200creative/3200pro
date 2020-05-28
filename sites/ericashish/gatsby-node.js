const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const landingPageTemplate = path.resolve(`./src/components/page-template.js`)
  return graphql(`
    query loadPagesQuery($limit: Int!) {
      allSanityLandingPage(limit: $limit) {
        edges {
          node {
            id
            title
            slug {
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
    result.data.allSanityLandingPage.edges.forEach(edge => {
      const id = edge.node.id
      const slug = edge.node.slug.current
      const path = `${slug}/`
      createPage({
        // Path for this page — required
        path,
        component: landingPageTemplate,
        context: {id},
      })
    })
  })
}