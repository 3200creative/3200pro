/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from './block-content'
const PageTemplate = props => {
    const { data, errors } = props
    const galleryPage = data && data.galleryPage

    
    return (
      <Layout>
        {errors && <SEO title='GraphQL Error' />}
        {galleryPage && <SEO title={galleryPage.title} />}
        <Container>
            {errors && (
                <GraphQLErrorList errors={errors} />
            )}
        </Container>
            {galleryPage && <Styled.h1 sx={{textAlign:'center', my:4}}>{galleryPage.title}</Styled.h1>}
        {galleryPage._rawBlockContent && <BlockContent blocks={galleryPage._rawBlockContent} />}
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
  }
  }
`