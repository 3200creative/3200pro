/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from './block-content'

const PageTemplate = props => {
    const { data, errors } = props
    const page = data && data.page
    console.log('data:');
    console.log(data);

    
    return (
      <Layout>
        {errors && <SEO title='GraphQL Error' />}
        {page && <SEO title={page.title} />}
        <Container>
            {errors && (
                <GraphQLErrorList errors={errors} />
            )}
        </Container>
        <div sx={{variant: 'variants.landingPage'}}>
            {page && <Styled.h1>{page.title}</Styled.h1>}
        
        {page._rawBlockContent && <BlockContent blocks={page._rawBlockContent} />}
        </div>
        </Layout>
  )
}

export default PageTemplate

export const query = graphql`
  query LandingPageQuery($id: String!) {    
    page: sanityLandingPage(id: { eq: $id }) {
        id
        title
        slug {
            current
        }
        _rawBlockContent(resolveReferences: {maxDepth: 20})
  }
  }
`