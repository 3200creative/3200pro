const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`./src/components/postTemplate.js`)
  const serviceTemplate = path.resolve(`./src/components/serviceTemplate.js`)
  return graphql(`
    query loadPagesQuery {
      allSanityPost(filter: { slug: { current: { ne: null } } }) {
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
      allSanityServices (filter: { slug: { current: { ne: null } } }) {
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
    result.data.allSanityPost.edges.forEach(edge => {
      const id = edge.node.id
      const slug = edge.node.slug.current
      const path = `blog/${slug}/`
      createPage({
        // Path for this page — required
        path,
        component: postTemplate,
        context: {id},
      })
    })

  // Create Tea pages.
  result.data.allSanityServices.edges.forEach(edge => {
    const id = edge.node.id
    const slug = edge.node.slug.current
    const path = `services/${slug}/`
    createPage({
      // Path for this page — required
      path,
      component: serviceTemplate,
      context: {id},
    })
  })
  })
}