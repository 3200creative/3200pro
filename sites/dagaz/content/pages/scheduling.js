/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from 'gatsby'
import SiteLayout from 'c32-gatsby-theme-core/src/components/layout'
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from '../../src/components/block-content'
import Hero from 'c32-gatsby-theme-components/src/components/ui/sanity-hero'
import Blank from '../assets/blank.png'
import { mapEdgesToNodes } from '../../src/lib/helpers'
import { Helmet } from "react-helmet"

export const query = graphql`
  query SchedulingPageQuery {
    page: sanitySchedulingPage {
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
  }
`

const Scheduler = props => {
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
      <SEO title='scheduler' />
      <Helmet>
      <script src="https://widget-cdn.simplepractice.com/assets/integration-1.0.js"></script>
      </Helmet>
      <Container>
      <Hero
          titleText= { page.header }
          bg = { bg }
          py = '100px'
          ctaHeight = '200px'
          bgc = '#fff'
          overlayRGBA = 'rgba(255,255,255,.7)'
        />
        <div
        sx={{
          marginBottom: 6,
        }}
        >
          <BlockContent blocks={page._rawBlockContent || []} />
        </div>
        <div className="spwidget-button-wrapper"
        sx={{
          textAlign: 'center'
        }}>
          <a
          href="https://britta-svihel.clientsecure.me"
          className="spwidget-button"
          data-spwidget-scope-id="0d9c2a69-f143-45bf-9bea-ce56d9434a6f"
          data-spwidget-scope-uri="britta-svihel"
          data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b"
          data-spwidget-scope-global data-spwidget-autobind
          sx={{
            background: '#d6e3dd',
            p: 4,
            color: 'text',
            borderRadius: '4',
          }}
          >Request Appointment</a></div>

      </Container>
    </SiteLayout>
  )
}

export default Scheduler