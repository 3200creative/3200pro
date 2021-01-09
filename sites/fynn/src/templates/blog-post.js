/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import { SEO } from "c32-gatsby-theme-core"
import { useSiteMetadata } from "c32-gatsby-theme-core"
import  Layout  from "c32-gatsby-theme-core/src/components/layoutV2"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from '../components/block-content'


const PageTemplate = props => {
    const { globalNavMenu } = useSiteMetadata()
    const { data, errors } = props
    const page = data && data.page
    const menuItems = page.navMenu || globalNavMenu || [];
    return (
      <Layout navMenuItems={menuItems} >
        {errors && <SEO title='GraphQL Error' />}
        {page && 
        <SEO 
        title='Title'
        description='Desc'
        />
        }
        <Container>
            {errors && (
                <GraphQLErrorList errors={errors} />
            )}
        </Container>
        <div sx={{marginTop: '140px'}}> 
            {page && <Styled.h1>{page.title}</Styled.h1>}
        {page._rawBlockContent && <BlockContent blocks={page._rawBlockContent}/>}
        <div
        sx={{
          padding: 2
        }}>
        </div>
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
        manualRelatedProducts {
          title
          slug {
            current
          }
          featuredImage {
                asset {
                  _id
                  url
                  fluid(maxWidth: 600) {
                    ...GatsbySanityImageFluid
                  }
                  source {
                    url
                  }
                }
                crop {
                  bottom
                  left
                  top
                  right
                }
                hotspot {
                  x
                  y
                  height
                  width
                }
                alt
            }
        }
        _rawBlockContent(resolveReferences: {maxDepth: 5})
    }
  }
  `