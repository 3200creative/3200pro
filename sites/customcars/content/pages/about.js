/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { graphql } from 'gatsby'
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import BlockContent from '../../src/components/block-content'
import SanityHero from 'c32-gatsby-theme-components/src/components/ui/sanity-hero-faux-bg'

export const query = graphql`
  query AboutPageQuery {
    page: sanityAboutPage {
      ccHeader
      _rawCcBlockContent
      heroImage {
        asset {
              fluid(maxWidth: 1200) {
                ...GatsbySanityImageFluid
              }
          }
      }
      ccSeo {
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
      title={page.ccSeo.metaTitle}
      description={page.ccSeo.metaDesc}
      />
      <SanityHero
          titleText= { page.ccHeader }
          buttonText="Inquire About Your Project"
          buttonLink="/contact"
          overlayRGBA='rgba(0,0,0,.4)'
          bg = { bg }
          opacity = '1'
        />
        <div sx={{
          variant: 'variants.primaryContentWrapper'
        }}>
        <BlockContent blocks={page._rawCcBlockContent || []} />
        </div>
    </Layout>
  )
}

export default AboutPage