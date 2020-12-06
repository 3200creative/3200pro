import React from 'react'
import { graphql } from 'gatsby'
import SiteLayout from 'c32-gatsby-theme-core/src/components/layout'
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import { mapEdgesToNodes } from '../../src/lib/helpers'
import BlogPostPreviewGrid from '../../src/components/blog-post-preview-grid'
import Hero from 'c32-gatsby-theme-components/src/components/ui/hero'


export const query = graphql`
  query blogArchiveQuery {
    posts: allSanityPost(
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } },
      limit: 12, 
      sort: { fields: [publishedAt], order: DESC }
      ) {
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
    heroImage: file(relativePath: { eq: "maple-grove-therapy-mn.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
  }
`

const Blog = props => {
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
      'missing blog archive data. Open the studio at http://localhost:3333 and add "About" page data and restart the development server.'
    )
  }
  const bg = data.heroImage.childImageSharp.fluid

  return (
    <SiteLayout>
      <SEO title='title' />
      <Container>
      <Hero
          titleText= 'Dagaz Therapy Services'
          buttonText="Schedule Appointment"
          buttonLink="/scheduling/"
          buttonText2="Contact Dagaz"
          maxHeight = '500px'
          buttonLink2="/contact-maple-grove-mn-therapist/"
          bg = {bg}
          ctaHeight = '250px'
          bgc = '#fff'
          overlayRGBA = 'rgba(255,255,255,.5)'
        />
      {posts && posts.length > 0 && <BlogPostPreviewGrid nodes={posts} />}
      </Container>
    </SiteLayout>
  )
}
    

export default Blog