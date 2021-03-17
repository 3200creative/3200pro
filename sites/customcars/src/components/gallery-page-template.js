/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from './block-content'
import Hero from 'c32-gatsby-theme-components/src/components/ui/sanity-hero-faux-bg'

const PageTemplate = props => {
    const { data, errors } = props
    const galleryPage = data && data.galleryPage
    return (
      <Layout>
        {errors && <SEO title='GraphQL Error' />}
        
        {galleryPage && <SEO 
      title={galleryPage.ccSeo.metaTitle}
      description={galleryPage.ccSeo.metaDesc}
      />}
        <Container>
            {errors && (
                <GraphQLErrorList errors={errors} />
            )}
        </Container>
        <div><Hero
          titleText= {galleryPage.title}
          // buttonText="Inquire About Your Remodeling Project"
          // buttonLink="/contact"
          overlayRGBA='rgba(0,0,0,.4)'
          opacity = '.3'
          bg = {galleryPage.featuredImage.asset.fluid}
        /></div>
        {galleryPage._rawCcBlockContent && 
        <BlockContent blocks={galleryPage._rawCcBlockContent} />
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
        ccSlug {
            current
        }
        _rawCcBlockContent
        featuredImage {
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