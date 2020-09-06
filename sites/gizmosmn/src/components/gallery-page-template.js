/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from './block-content'
import SanityHero from 'c32-gatsby-theme-components/src/components/ui/sanity-hero-faux-bg'

const PageTemplate = props => {
    const { data, errors } = props
    const galleryPage = data && data.galleryPage
    return (
      <Layout>
        {errors && <SEO title='GraphQL Error' />}
        
        {galleryPage && <SEO 
      title={galleryPage.seo.metaTitle}
      description={galleryPage.seo.metaDesc}
      />}
        <Container>
            {errors && (
                <GraphQLErrorList errors={errors} />
            )}
        </Container>
        <SanityHero
          titleText= {galleryPage.title}
          // buttonText="Inquire About Your Remodeling Project"
          // buttonLink="/contact"
          overlayRGBA='rgba(0,0,0,.4)'
          opacity = '1'
          bg = {galleryPage.featuredImage.asset.fluid}
        />
        {galleryPage._rawBlockContent && 
        
        <BlockContent blocks={galleryPage._rawBlockContent} />
        }
        </Layout>
  )
}

export default PageTemplate

export const query = graphql`
  query galleryPageQuery($id: String!) {    
    galleryPage: sanityGalleryPage(id: { eq: $id }) {
        id
        title
        slug {
            current
        }
        _rawBlockContent
        featuredImage {
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