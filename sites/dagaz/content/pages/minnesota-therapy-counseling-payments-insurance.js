import React from 'react'
import { graphql } from 'gatsby'
import SiteLayout from 'c32-gatsby-theme-core/src/components/layout'
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from '../../src/components/block-content'
import Hero from 'c32-gatsby-theme-components/src/components/ui/hero'


export const query = graphql`
  query PaymentQuery {
    page: sanityPage(_id: {eq: "34a3436d-07fc-4a2d-8a3d-02b5684755e0"}) {
      title
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

const Payment = props => {
  const { data, errors } = props
  const bg = data.heroImage.childImageSharp.fluid
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
      <SEO 
      title={page.seo.metaTitle}
      description={page.seo.metaDesc}
      />
      <Container>
      <Hero
          titleText= 'Ready To Get Started?'
          buttonText="Schedule Appointment"
          buttonLink="/scheduling/"
          buttonText2="Contact Dagaz"
          maxHeight = '500px'
          buttonLink2="/contact-maple-grove-mn-therapist/"
          bg = {bg}
          ctaHeight = '250px'
          bgc = '#fff'
          overlayRGBA = 'rgba(255,255,255,.5)'
        />
        <h1>{page.title}</h1>
        <BlockContent blocks={page._rawBlockContent || []} />
      </Container>
    </SiteLayout>
  )
}

export default Payment