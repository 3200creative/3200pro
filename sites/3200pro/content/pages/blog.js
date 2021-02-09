/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'
import { graphql } from 'gatsby'
import SiteLayout from 'c32-gatsby-theme-core/src/components/layout'
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import { mapEdgesToNodes } from '../../src/lib/helpers'
import BlogPostPreviewGrid from '../../src/components/blog-post-preview-grid'
import BlockContent from '../../src/components/block-content'

export const query = graphql`
  query serviceArchiveQuery {
    posts: allSanityPost(
      filter: { slug: { current: { ne: null } }}
      sort: { fields: [publishedAt], order: DESC }
      ){
      edges {
        node {
          title
          id
          publishedAt
          featuredImage {
            asset {
              _id
            }
            alt
          }
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const Posts = props => {
  const { data, errors } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const posts = data && data.posts && mapEdgesToNodes(data.posts)

  if (!posts) {
    throw new Error(
      'missing posts archive data.'
    )
  }

  return (
    <SiteLayout>
      <SEO 
       title='Custom Gatsby Website Development' 
       description='Minneapolis Based Gatsby Website Development' 
       />
      <Container>
        <h1>Blog</h1>
        {/* <BlockContent blocks={posts._rawBlockContent || []} /> */}
      {posts && posts.length > 0 && <BlogPostPreviewGrid nodes={posts} />}
      </Container>
    </SiteLayout>
  )
}
    

export default Posts