/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from './block-content'
import Hero from 'c32-gatsby-theme-components/src/components/ui/hero'
import Blank from '../../content/assets/maple-grove-therapy-mn.jpg'

const ServiceTemplate = props => {
    const { data, errors } = props
    const service = data && data.service
    const bg = data.heroImage.childImageSharp.fluid
    
    return (
      <Layout>
        {errors && <SEO title='GraphQL Error' />}
        {service && <SEO title={service.title} />}
        <Container>
        <Hero
          titleText= 'Degaz Therapy Services'
          buttonText="Schedule Appointment"
          buttonLink="/contact"
          bg = {bg}
          ctaHeight = '250px'
          bgc = '#fff'
          overlayRGBA = 'rgba(255,255,255,.5)'
        />
            {errors && (
                <GraphQLErrorList errors={errors} />
            )}
        </Container>
            {service && <Styled.h1>{service.title}</Styled.h1>}
        {service._rawBlockContent && <BlockContent blocks={service._rawBlockContent} />}
        </Layout>
  )
}

export default ServiceTemplate

export const query = graphql`
  query serviceQuery($id: String!) {    
    service: sanityServices(id: { eq: $id }) {
        id
        title
        slug {
            current
        }
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