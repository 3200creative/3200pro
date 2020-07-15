
import React from 'react'
import { graphql } from 'gatsby'
import SiteLayout from 'c32-gatsby-theme-core/src/components/layout'
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from '../../src/components/block-content'
import Hero from 'c32-gatsby-theme-components/src/components/ui/sanity-hero'
import reactStringReplace from 'react-string-replace'

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
  let ColoredTitle1 = reactStringReplace(page.title, 'Music.', (match, i) => (
    <span key={match + i} style={{ color: colors.musicColor.hex }}>{match}</span>
  ))
  let ColoredTitle2 = reactStringReplace(ColoredTitle1, 'Tea.', (match, i) => (
    <span key={match + i} style={{ color: colors.teaColor.hex }}>{match}</span>
  ))
  let ColoredTitle3 = reactStringReplace(ColoredTitle2, 'Business.', (match, i) => (
    <span key={match + i} style={{ color: colors.businessColor.hex }}>{match}</span>
  ))
  let ColoredTitle4 = reactStringReplace(ColoredTitle3, 'Life.', (match, i) => (
    <span key={match + i} style={{ color: colors.lifeColor.hex }}>{match}</span>
  ))
  return (
    <SiteLayout>
      <SEO title={page.header} />
      <Container>
      <h1>
        {ColoredTitle4}
      </h1>
        <BlockContent blocks={ page._rawBlockContent || [] } />
      </Container>
    </SiteLayout>
  )
}

export default Homepage
