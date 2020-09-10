const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const FishingBoatTemplate = path.resolve(`./src/components/fishingBoatTemplate.js`)
  return graphql(`
    query loadPagesQuery($limit: Int!) {
      sportfishing: allSanityBoat(
        limit: $limit
        filter: { 
            slug: { current: { ne: null } },
            boatType: {elemMatch: {_id: {eq: "drafts.92303495-a1f7-44a3-8603-51b8703f4a87"}}}
            }
        ){
        edges {
          node {
            title
            id
            slug {
              current
            }
          }
        }
      }
      bottomfishing: allSanityBoat(
        limit: $limit
        filter: { 
            slug: { current: { ne: null } },
            boatType: {elemMatch: {_id: {eq: "drafts.9483f680-0b87-41c7-b330-d47c822eccec"}}}
            }
        ){
        edges {
          node {
            title
            id
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

    // Create blog sportfishing pages.
    result.data.sportfishing.edges.forEach(edge => {
      const id = edge.node.id
      const slug = `/maui-sport-fishing/sportfishing-boats/${edge.node.slug.current}/`
      const path = slug
      createPage({
        path,
        component: FishingBoatTemplate,
        context: {id},
      })
    })

    // Create blog sportfishing pages.
    result.data.bottomfishing.edges.forEach(edge => {
      const id = edge.node.id
      const slug = `/bottomfishing/bottom-fishing-boats/${edge.node.slug.current}/`
      const path = slug
      createPage({
        path,
        component: FishingBoatTemplate,
        context: {id},
      })
    })

  })
}