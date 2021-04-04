const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const LandingPageTemplate = path.resolve(`./src/components/landingPage-template.js`)
  const LifePageTemplate = path.resolve(`./src/components/lifePage-template.js`)
  const MusicPageTemplate = path.resolve(`./src/components/musicPage-template.js`)
  const TeaPageTemplate = path.resolve(`./src/components/teaPage-template.js`)
  const BusinessPageTemplate = path.resolve(`./src/components/businessPage-template.js`)
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
      allSanityLife (filter: { slug: { current: { ne: null } } }) {
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
      allSanityTea (filter: { slug: { current: { ne: null } } }) {
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
      allSanityMusic (filter: { slug: { current: { ne: null } } }) {
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
      allSanityBusiness (filter: { slug: { current: { ne: null } } }) {
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
        component: LandingPageTemplate,
        context: {id},
      })
    })

   // Create Life pages.
   result.data.allSanityLife.edges.forEach(edge => {
    const id = edge.node.id
    const slug = edge.node.slug.current
    const path = `life/${slug}/`
    createPage({
      // Path for this page — required
      path,
      component: LifePageTemplate,
      context: {id},
    })
  })

  // Create Music pages.
  result.data.allSanityMusic.edges.forEach(edge => {
    const id = edge.node.id
    const slug = edge.node.slug.current
    const path = `music/${slug}/`
    createPage({
      // Path for this page — required
      path,
      component: MusicPageTemplate,
      context: {id},
    })
  })

  // Create Business pages.
  result.data.allSanityBusiness.edges.forEach(edge => {
    const id = edge.node.id
    const slug = edge.node.slug.current
    const path = `business/${slug}/`
    createPage({
      // Path for this page — required
      path,
      component: BusinessPageTemplate,
      context: {id},
    })
  })

  // Create Tea pages.
  result.data.allSanityTea.edges.forEach(edge => {
    const id = edge.node.id
    const slug = edge.node.slug.current
    const path = `tea/${slug}/`
    createPage({
      // Path for this page — required
      path,
      component: TeaPageTemplate,
      context: {id},
    })
  })
  })
}