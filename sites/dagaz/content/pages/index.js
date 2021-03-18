/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from 'gatsby'
import SiteLayout from 'c32-gatsby-theme-core/src/components/layout'
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from '../../src/components/block-content'
import SanityHero from 'c32-gatsby-theme-components/src/components/ui/sanity-hero-faux-bg'
import { mapEdgesToNodes } from '../../src/lib/helpers'
import ServicePreviewGrid from '../../src/components/home-preview-grid'

export const query = graphql`
  query HomePageQuery {
    page: sanityHomepage {
      header
      _rawBlockContent
      subTitleText
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
    services: allSanityServices(
      filter: { slug: { current: { ne: null } }}
      sort: { fields: [publishedAt], order: DESC }
      ){
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

          _rawHomepageExcerpt
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
  const bg = page.heroImage && page.heroImage.asset.fluid
  if (!page) {
    throw new Error(
      'Missing "About" page data. Open the studio at http://localhost:3333 and add "About" page data and restart the development server.'
    )
  }
  const services = data && data.services && mapEdgesToNodes(data.services)


  return (
    <SiteLayout>
      <SEO 
      title={page.seo.metaTitle}
      description={page.seo.metaDesc}
      />
      <Container>
        <SanityHero
          titleText= { page.header }
          subTitleText= {page.subTitleText ? page.subTitleText : 'We offer counseling and individual therapy to Maple Grove Minnesota'}
          buttonText="Schedule Appointment"
          buttonLink="/scheduling/"
          maxHeight = '500px'
          buttonText2="Contact Dagaz"
          buttonLink2="/contact-maple-grove-mn-therapist/"
          bg = { bg }
          alt = 'Maple Grove Therapist'
          bgc = '#fff'
          ctaHeight = '250px'
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