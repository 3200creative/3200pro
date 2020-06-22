import React from 'react'
import { graphql } from 'gatsby'
import SiteLayout from 'c32-gatsby-theme-core/src/components/layout'
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from '../../src/components/block-content'
import Blank from '../assets/blank.png'
import Hero from 'c32-gatsby-theme-components/src/components/ui/hero'

export const query = graphql`
  query ConsultQuery {
    page: sanityPage(_id: {eq: "b1da9248-0dea-4681-9218-7086aa614436"}) {
      title
      _rawBlockContent
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

const Consultation = props => {
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
  const bg = data.heroImage.childImageSharp.fluid

  return (
    <SiteLayout>
      <SEO title={page.header} />
      <Container>
      <Hero
          titleText= 'Ready To Get Started?'
          buttonText="Schedule Appointment"
          buttonLink="/contact"
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

export default Consultation