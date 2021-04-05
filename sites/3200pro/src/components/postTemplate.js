/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from './block-content'
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
        title={page.seo.metaTitle} 
        description={page.seo.metaDesc} 
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
        <Disqus config={disqusConfig} />
        </div>
        <div className='testing' sx ={{
          width: '100%',
          height: '40px',
          color: 'background',
          marginTop: '-40px',
          zIndex: '999999'
        }}><h1>Test</h1>
        </div>
        </Layout>
  )
}

export default PageTemplate

export const query = graphql`
  query postQuery($id: String!) {    
    page: sanityPost(id: { eq: $id }) {
        id
        title
        slug {
            current
        }
        seo {
          metaDesc
          metaTitle
        }
        _rawBlockContent
    }
  }
  `