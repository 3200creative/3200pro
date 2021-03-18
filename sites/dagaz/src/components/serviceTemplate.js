/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { SEO, Layout } from "c32-gatsby-theme-core"
import { Link } from 'gatsby'
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from './block-content'
import Hero from 'c32-gatsby-theme-components/src/components/ui/sanity-hero'
import { Grid, Box } from 'theme-ui'
const ServiceTemplate = props => {
    const { data, errors } = props
    const service = data && data.service
    const bg = data.heroImage.childImageSharp.fluid
    
    return (
      <Layout>
        {errors && <SEO title='GraphQL Error' />}
        {service && <SEO 
      title={service.seo.metaTitle}
      description={service.seo.metaDesc}
      />}
        <Container>
        <Hero
          titleText= {service.title}
          subTitleText= {service.subTitleText ? service.subTitleText : 'Maple Grove Minnesota Therapy and Counseling'}
          buttonText="Schedule Appointment"
          buttonLink="/scheduling/"
          buttonText2="Contact Dagaz"
          buttonLink2="/contact-maple-grove-mn-therapist/"
          bg = {bg}
          ctaHeight = '250px'
          bgc = '#fff'
          overlayRGBA = 'rgba(255,255,255,.5)'
        />
            {errors && (
                <GraphQLErrorList errors={errors} />
            )}
        </Container>
        {service._rawBlockContent && <BlockContent blocks={service._rawBlockContent} />}
        <h4
        sx= {{
          fontSize: 4,
          textAlign: 'center',
        }}
        >Ready to get started or have questions about {service.title}?</h4>
        <Grid
        gap={4}
        columns={[ 1, 2, 2]}
        sx={{
          maxWidth: '90%',
            width: '600px',
            margin: '0 auto',
          variant: 'variants.ctaButtons'
        }}
        >
          <Box 
          sx={{
            my: [0, null, 4] 
          }}><Link to='/scheduling'>
          Schedule Appointment
        </Link></Box>
        <Box
        sx={{
          my: [0, null, 4] 
        }}
        ><Link to='/contact-maple-grove-mn-therapist/' >
          Contact Dagaz 
        </Link></Box>
        </Grid>
        </Layout>
  )
}

export default ServiceTemplate

export const query = graphql`
  query serviceQuery($id: String!) {    
    service: sanityServices(id: { eq: $id }) {
        id
        title
        subTitleText
        slug {
            current
        }
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