/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from '../components/block-content'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

const PageTemplate = props => {
    const { data, errors } = props
    const page = data && data.page
    let disqusConfig = {
      url: `https://3200.pro/${page.slug.current}`,
      identifier: page.id, 
      title: page.title,
    }
    
    return (
      <Layout>
        {errors && <SEO title='GraphQL Error' />}
        {page && 
        <SEO 
        title={page.seo.seo_title && page.seo.seo_title} 
        description={page.seo.seo_description && page.seo.meta_description} 
        />
        }
        <Container>
            {errors && (
                <GraphQLErrorList errors={errors} />
            )}
        </Container>
            {page && <Styled.h1>{page.title}</Styled.h1>}
        {page._rawBlockContent && <BlockContent blocks={page._rawBlockContent} />}
        <CommentCount config={disqusConfig} placeholder={'...'} />
        <div
        sx={{
          padding: 2
        }}>
        </div>
        </Layout>
  )
}

export default PageTemplate

export const query = graphql`
  query singularPostQuery($id: String!) {    
    page: sanityPost(id: { eq: $id }) {
        id
        title
        slug {
            current
        }
        seo {
          meta_description
          seo_title
        }
        _rawBlockContent
    }
  }
  `