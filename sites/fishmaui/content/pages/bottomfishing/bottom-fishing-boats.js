/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'
import { graphql } from 'gatsby'
import SiteLayout from 'c32-gatsby-theme-core/src/components/layout'
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import { mapEdgesToNodes } from '../../../src/lib/helpers'
import BoatPreviewGrid from '../../../src/components/boat-preview-grid'
import BlockContent from '../../../src/components/block-content'

export const query = graphql`
  query bottomBoatArchiveQuery {
    boat: allSanityBoat(
      sort: {fields: archiveOrder}
      filter: { 
          slug: { current: { ne: null } },
          boatType: {elemMatch: {_id: {eq: "drafts.9483f680-0b87-41c7-b330-d47c822eccec"}}}
          }
      ){
      edges {
        node {
          title
          id
          boatType {
            _id
          }
          featuredImage {
            asset {
              _id
            }
            alt
          }
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const Page = props => {
  const { data, errors } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList ersrors={errors} />
      </Layout>
    )
  }

  const boat = data && data.boat && mapEdgesToNodes(data.boat)

  if (!boat) {
    throw new Error(
      'missing boat archive data.'
    )
  }

  return (
    <SiteLayout>
      <SEO 
      title='Placeholder'
      description='PlaceHolder'
      />
      <Container>
      {boat && boat.length > 0 && <BoatPreviewGrid nodes={boat} />}
      </Container>
    </SiteLayout>
  )
}
    

export default Page