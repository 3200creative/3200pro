/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, Link } from 'gatsby'
import SiteLayout from 'c32-gatsby-theme-core/src/components/layout'
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from '../../src/components/block-content'
import SanityHero from 'c32-gatsby-theme-components/src/components/ui/sanity-hero-faux-bg'
import { Grid } from 'theme-ui'
import { Box } from 'theme-ui'
import { buildPageImageObj } from '../../src/lib/helpers'
import { imageUrlFor } from '../../src/lib/image-url'
import { getFluidGatsbyImage } from "gatsby-source-sanity"
const sanityConfig = {projectId: 'yit7sywj', dataset: 'production'}


export const query = graphql`
  query ShowcaseQuery {
    page: sanityGalleryArchive {
      header
      _rawBlockContent
        heroImage {
            asset {
                fluid(maxWidth: 1200) {
                    ...GatsbySanityImageFluid
                }
            }
        }
    }
    posts: allSanityGalleryPage(
      sort: {fields: position, order: ASC}
      filter: { slug: { current: { ne: null } }}) {
        edges {
        node {
            title
            slug {
            current
            }
            id
            featuredImage {
                asset {
                  _id
                    fluid(maxWidth: 1200) {
                        ...GatsbySanityImageFluid
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
            seo {
              metaDesc
              metaTitle
            }
        }
        }
    }
  }
`

const Showcase = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const page = data && data.page
  const posts = data && data.posts.edges
  const bg = page.heroImage.asset.fluid
  if (!page) {
    throw new Error(
      'Missing "About" page data. Open the studio at http://localhost:3333 and add "About" page data and restart the development server.'
    )
  }

  return (
    <SiteLayout>
      <SEO 
      title='Minnesota Custom Car Shop'
      description='Award winning, custom cars, muscle cars, racecars, and hot rods","name":"Gizmos - Custom Car Builder'
      />
      <Container>
        <SanityHero
          titleText= {page.header}
          buttonText="Inquire About Your Remodeling Project"
          buttonLink="/contact"
          overlayRGBA='rgba(0,0,0,.4)'
          bg = { bg }
          opacity = '1'
        />
        {/* <BlockContent blocks={page._rawBlockContent || []} /> */}
        <div sx={{
        variant: 'variants.primaryContent',
        }}>
        <Grid 
            width={[ '100%', '40%' ]}
            gap={6}
            sx={{
            paddingTop: ['60px', null, '120px', null],
            width: '90%',
            variant: 'variants.showcaseFeed'
        }}
        >
        {posts.map(post => (
        <Link to={post.node.slug.current}>
        <Box
        sx={{
            margin: '0'
            }}
        >
        {post.node.featuredImage && (<img
        sx= {{
          width: '100%',
        }}
        src={imageUrlFor(buildPageImageObj(post.node.featuredImage))
          .width(1200)
          .format('webp')
          .url()
          
        }
          alt={post.node.featuredImage.alt}
        />
        ) || 'needs featured image'}
        <h2>{post.node.title}</h2>
        </Box>
        </Link>
        ))}
        </Grid>
        </div>
      </Container>
    </SiteLayout>
  )
}

export default Showcase