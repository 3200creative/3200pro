/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from './block-content'
const BusinessPageTemplate = props => {
    const { data, errors } = props
    const page = data && data.page
    
    return (
      <Layout>
        {errors && <SEO title='GraphQL Error' />}
        {page && <SEO title={page.title} />}
        <Container>
            {errors && (
                <GraphQLErrorList errors={errors} />
            )}
        </Container>
            {page && <Styled.h1>{page.title}</Styled.h1>}
            <p>{page.publishedAt}</p>
            <Img fluid={page.featuredImage.asset.fluid} alt="Test"
                sx= {{
                  variant: 'variants.shadow',
                  maxWidth: '80%',
                  width: '560px',
                  mx: 'auto',

                }}
            />
        {page._rawBlockContent && <BlockContent blocks={page._rawBlockContent} />}
        </Layout>
  )
}

export default BusinessPageTemplate

export const query = graphql`
  query BusinessPageQuery($id: String!) {    
    page: sanityBusiness(id: { eq: $id }) {
        id
        title
        slug {
            current
        }
        excerpt
        publishedAt
        featuredImage {
                asset {
                  fluid(maxWidth: 600) {
                    ...GatsbySanityImageFluid
                  }
                }
                alt
        }
        _rawBlockContent(resolveReferences: {maxDepth: 20})
  }
  }
`