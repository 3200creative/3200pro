import React from 'react'
import { graphql } from 'gatsby'
import SiteLayout from 'c32-gatsby-theme-core/src/components/layout'
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import { mapEdgesToNodes } from '../../src/lib/helpers'
import ServicePreviewGrid from '../../src/components/service-preview-grid'
import Hero from 'c32-gatsby-theme-components/src/components/ui/hero'

export const query = graphql`
  query serviceArchiveQuery {
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
          pattern {
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
    heroImage: file(relativePath: { eq: "maple-grove-therapy-mn.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
  }
`

const Services = props => {
  const { data, errors } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const services = data && data.services && mapEdgesToNodes(data.services)
  const bg = data.heroImage.childImageSharp.fluid
  
  if (!services) {
    throw new Error(
      'missing services archive data.'
    )
  }

  return (
    <SiteLayout>
      <SEO title='title' />
      <Container>
      <Hero
          titleText= 'Degaz Therapy Services'
          buttonText="Schedule Appointment"
          buttonLink="/contact"
          bg = {bg}
          ctaHeight = '250px'
          bgc = '#fff'
          overlayRGBA = 'rgba(255,255,255,.5)'
        />
      {services && services.length > 0 && <ServicePreviewGrid nodes={services} />}
      </Container>
    </SiteLayout>
  )
}
    

export default Services