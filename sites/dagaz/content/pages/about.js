import React from 'react'
import { graphql } from 'gatsby'
import SiteLayout from 'c32-gatsby-theme-core/src/components/layout'
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from '../../src/components/block-content'

export const query = graphql`
  query AboutPageQuery {
    page: sanityAboutPage(id: {eq: "-ab256ce4-4d4c-55c2-b7b7-91685e1d7a42"}) {
      header
      _rawBlockContent
    }
  }
`

const AboutPage = props => {
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
      'Missing "About" page data. Open the studio at http://localhost:3333 and add "About" page data and restart the development server.'
    )
  }

  return (
    <SiteLayout>
      <SEO title={page.header} />
      <Container>
        <h1>{page.header}</h1>
        <BlockContent blocks={page._rawBlockContent || []} />
      </Container>
    </SiteLayout>
  )
}

export default AboutPage