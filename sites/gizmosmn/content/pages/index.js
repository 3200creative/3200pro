/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from 'gatsby'
import SiteLayout from 'c32-gatsby-theme-core/src/components/layout'
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from '../../src/components/block-content'
import Hero from 'c32-gatsby-theme-components/src/components/ui/sanity-hero-faux-bg'

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
      seo {
              metaDesc
              metaTitle
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
  const bg = page.heroImage.asset.fluid
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
          titleText= { page.header }
          buttonText="Inquire About Your Remodeling Project"
          buttonLink="/contact"
          overlayRGBA='rgba(0,0,0,.4)'
          opacity = '1'
          bg = { bg }
          maxHeight = '100px'
        />
        <div sx={{
          variant: 'variants.primaryContentWrapper'
        }}>
          <BlockContent blocks={page._rawBlockContent || []} />
        </div>
      </Container>
    </SiteLayout>
  )
}

export default Homepage