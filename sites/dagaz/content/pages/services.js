/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from 'gatsby'
import SiteLayout from 'c32-gatsby-theme-core/src/components/layout'
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import { mapEdgesToNodes } from '../../src/lib/helpers'
import ServicePreviewGrid from '../../src/components/service-preview-grid'
import SanityHero from 'c32-gatsby-theme-components/src/components/ui/sanity-hero-faux-bg'
import BlockContent from '../../src/components/block-content'

export const query = graphql`
  query serviceArchiveQuery {
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
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
    page: sanityServicesPage {
      header
      subTitleText
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

const Services = props => {
  const { data, errors } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const page = data && data.page
  const services = data && data.services && mapEdgesToNodes(data.services)
  const bg = data.heroImage.childImageSharp.fluid

  if (!services) {
    throw new Error(
      'missing services archive data.'
    )
  }

  return (
    <SiteLayout>
      <SEO 
      title={page.seo.metaTitle}
      description={page.seo.metaDesc}
      />
      <Container>
      <SanityHero
          titleText= {page.header}
          subTitleText= {page.subTitleText ? page.subTitleText : 'We offer counseling and individual therapy to Maple Grove Minnesota'}
          buttonText="Schedule Appointment"
          buttonLink="/scheduling/"
          buttonText2="Contact Dagaz"
          buttonLink2="/contact-maple-grove-mn-therapist/"
          bg = {bg}
          alt = 'Maple Grove Therapy - Addiction - Family Therapist'
          ctaHeight = '250px'
          bgc = '#fff'
          overlayRGBA = 'rgba(255,255,255,.5)'
        />
        <BlockContent blocks={page._rawBlockContent || []} />
      {services && services.length > 0 && <ServicePreviewGrid nodes={services} />}
      </Container>
    </SiteLayout>
  )
}
    

export default Services