/** @jsx jsx */
import { jsx, Styled, Button } from "theme-ui"
import React from 'react'
import { graphql } from 'gatsby'
import SiteLayout from 'c32-gatsby-theme-core/src/components/layout'
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from '../../src/components/block-content'
import Hero from 'c32-gatsby-theme-components/src/components/ui/sanity-hero'
import Blank from '../assets/blank.png'
import { mapEdgesToNodes } from '../../src/lib/helpers'
import ServicePreviewGrid from '../../src/components/service-preview-grid'

export const query = graphql`
  query HomePageQuery {
    page: sanityHomepage {
      header
      _rawBlockContent
      heroImage {
        asset {
              fluid(maxWidth: 1200) {
                ...GatsbySanityImageFluid
              }
          }
    }
    }
    services: allSanityServices(
      filter: { slug: { current: { ne: null } }}){
      edges {
        node {
          title
          id
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
  const bg = page.heroImage && page.heroImage.asset.fluid || Blank
  if (!page) {
    throw new Error(
      'Missing "About" page data. Open the studio at http://localhost:3333 and add "About" page data and restart the development server.'
    )
  }
  const services = data && data.services && mapEdgesToNodes(data.services)


  return (
    <SiteLayout>
      <SEO title={page.header} />
      <Container>
        <Hero
          titleText= { page.header }
          buttonText="Schedule Appointment"
          buttonLink="/contact"
          bg = { bg }
          bgc = '#fff'
          overlayRGBA = 'rgba(255,255,255,.7)'
        />
        <BlockContent blocks={page._rawBlockContent || []} />
        {services && services.length > 0 && 
        
        <ServicePreviewGrid
        nodes={services}
        />}
      </Container>
    </SiteLayout>
  )
}

export default Homepage