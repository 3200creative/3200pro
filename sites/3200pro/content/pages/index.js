/** @jsx jsx */
import { jsx } from 'theme-ui'
// import React from 'react'
import { graphql } from 'gatsby'
import React, { useRef, useState, useEffect, useCallback } from 'react'
import SiteLayout from 'c32-gatsby-theme-core/src/components/layout'
import { SEO, Layout } from 'c32-gatsby-theme-core'
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from '../../src/components/block-content'

export const query = graphql`
  query HomePageQuery {
    page: sanityLandingPage(adminTitle: { eq: "Homepage" }) {
      displayedTitle
      _rawHeroText
      _rawBlockContent
      seo {
        metaDesc
        metaTitle
      }
    }
  }
`

const Homepage = (props) => {
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
      'Missing "Home" page data. Open the studio at http://localhost:3333 and add "Home" page data and restart the development server.'
    )
  }

  return (
    <SiteLayout>
      <SEO title={page.seo.metaTitle} description={page.seo.metaDesc} />
      <Container>
        <div
          sx={{
            variant: 'variants.landingPage',
          }}
        >
          <h1 className="bg-blue-50">{page.displayedTitle}</h1>
          <BlockContent blocks={page._rawHeroText || []} />
          <BlockContent blocks={page._rawBlockContent || []} />
        </div>
      </Container>
    </SiteLayout>
  )
}

export default Homepage
