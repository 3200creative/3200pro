
import React from 'react'
import { graphql } from 'gatsby'
import SiteLayout from 'c32-gatsby-theme-core/src/components/layout'
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from '../../src/components/block-content'
import Hero from 'c32-gatsby-theme-components/src/components/ui/sanity-hero'
import reactStringReplace from 'react-string-replace'
import TxtColorChange from '../../src/components/TxtColorChange'
export const query = graphql`
  query HomePageQuery {
    page: sanityPage(id: {eq: "-e07ca5b6-bcc6-5d90-8489-39702cd11394"}) {
      title
      _rawBlockContent(resolveReferences: {maxDepth: 20}) 
    }
    colors: sanityGlobalOptions {
      teaColor {
        hex
      }
      musicColor {
        hex
      }
      lifeColor {
        hex
      }
      businessColor {
        hex
      }
    }
  }
`

const Homepage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
   
  const page = data && data.page
  const colors = data && data.colors

  if (!page) {
    throw new Error(
      'Missing "Home" page data. Open the studio at http://localhost:3333 and add "Home" page data and restart the development server.'
    )
  }
  return (
    <SiteLayout>
      <SEO title={page.header} />
      <Container>
      <h1>
      <TxtColorChange txtBlock= {page.title} colors={colors} />
      </h1>
        <BlockContent blocks={ page._rawBlockContent || [] } />
      </Container>
    </SiteLayout>
  )
}

export default Homepage
