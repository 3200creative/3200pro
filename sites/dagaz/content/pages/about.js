import React from 'react'
import { graphql } from 'gatsby'
import SiteLayout from 'c32-gatsby-theme-core/src/components/layout'
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from '../../src/components/block-content'
import Hero from 'c32-gatsby-theme-components/src/components/ui/hero'


export const query = graphql`
  query AboutPageQuery {
    page: sanityAboutPage {
      header
      _rawBlockContent
      seo {
              metaDesc
              metaTitle
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
  const bg = data.heroImage.childImageSharp.fluid

  if (!page) {
    throw new Error(
      'Missing "About" page data. Open the studio at http://localhost:3333 and add "About" page data and restart the development server.'
    )
  }

  return (
    <SiteLayout>
      <SEO 
      title={page.seo.metaTitle}
      description={page.seo.metaDesc}
      />
      <Container>
      <Hero
          titleText= 'About Dagaz Therapy'
          buttonText="Schedule Appointment"
          buttonLink="/scheduling/"
          buttonText2="Contact Dagaz"
          buttonLink2="/contact-maple-grove-mn-therapist/"
          bg = {bg}
          ctaHeight = '250px'
          bgc = '#fff'
          overlayRGBA = 'rgba(255,255,255,.5)'
        />
        <h1>{page.header}</h1>
        <BlockContent blocks={page._rawBlockContent || []} />
      </Container>
    </SiteLayout>
  )
}

export default AboutPage