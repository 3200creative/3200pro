import React from 'react'
import { graphql } from 'gatsby'
import SiteLayout from 'c32-gatsby-theme-core/src/components/layout'
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from '../../src/components/block-content'
import Blank from '../assets/blank.png'

export const query = graphql`
  query PaymentQuery {
    page: sanityPage(id: {eq: "c6000bed-04aa-55a7-bd07-a3db9067c7b7"}) {
      title
      _rawBlockContent
    }
  }
`

const Payment = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const page = data && data.page
  if (!page) {
    throw new Error(
      'Missing page data. Open the studio at http://localhost:3333 and add page data and restart the development server.'
    )
  }

  return (
    <SiteLayout>
      <SEO title={page.header} />
      <Container>
        <h1>{page.title}</h1>
        <BlockContent blocks={page._rawBlockContent || []} />
      </Container>
    </SiteLayout>
  )
}

export default Payment