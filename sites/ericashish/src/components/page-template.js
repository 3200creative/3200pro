/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from '../components/block-content'
const PageTemplate = props => {
    const { data, errors } = props
    const landingPage = data && data.landingPage
    console.log('data:');
    console.log(data);
    
    return (
      <Layout>
        {errors && <SEO title='GraphQL Error' />}
        {landingPage && <SEO title={landingPage.title} />}
        <Container>
            {errors && (
                <GraphQLErrorList errors={errors} />
            )}
        </Container>
            {landingPage && <Styled.h1>{landingPage.title}</Styled.h1>}
        {landingPage._rawBlockContent && <BlockContent blocks={landingPage._rawBlockContent} />}
        </Layout>
  )
}

export default PageTemplate

export const query = graphql`
  query LandingPageQuery($id: String!) {    
    landingPage: sanityLandingPage(id: { eq: $id }) {
        id
        title
        slug {
            current
        }
        _rawBlockContent
  }
  }
`