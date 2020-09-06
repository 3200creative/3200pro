import React from 'react'
import { graphql } from 'gatsby'
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import BlockContent from '../../src/components/block-content'
import SanityHero from 'c32-gatsby-theme-components/src/components/ui/sanity-hero-faux-bg'

export const query = graphql`
  query AboutPageQuery {
    page: sanityAboutPage {
      header
      _rawBlockContent
      heroImage {
        asset {
              fluid(maxWidth: 1200) {
                ...GatsbySanityImageFluid
              }
          }
      }
      seo {
              metaDesc
              metaTitle
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
  const bg = page.heroImage.asset.fluid

  if (!page) {
    throw new Error(
      'Missing "About" page data. Open the studio at http://localhost:3333 and add "About" page data and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO 
      title={page.seo.metaTitle}
      description={page.seo.metaDesc}
      />
      <SanityHero
          titleText= { page.header }
          buttonText="Inquire About Your Remodeling Project"
          buttonLink="/contact"
          overlayRGBA='rgba(0,0,0,.4)'
          bg = { bg }
          opacity = '1'
        />
        <BlockContent blocks={page._rawBlockContent || []} />
    </Layout>
  )
}

export default AboutPage