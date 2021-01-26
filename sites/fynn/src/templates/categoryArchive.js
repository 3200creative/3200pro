/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql, Link } from "gatsby"
import { SEO } from "c32-gatsby-theme-core"
import Img from "gatsby-image"
import clientConfig from "../../client-config";
import Grid from '@material-ui/core/Grid'
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import { useSiteMetadata } from "c32-gatsby-theme-core"
import  Layout  from "c32-gatsby-theme-core/src/components/layoutV2"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from '../components/block-content'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const ArchiveTemplate = ({ props, data, pageContext }) => {
    const { singleProductMenu } = useSiteMetadata()
    const { numPages, limit, skip, currentPage } = pageContext
    const posts = data ? data.post.edges : null
    const archive = data && data.archive
    const category = archive.title.toLowerCase()
    const menuItems = archive.navMenu || singleProductMenu || [];
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? `/${category}/` : (`/${category}/` + (currentPage + 1)).toString()
    const nextPage = (`/${category}/` + (currentPage + 1)).toString()

    return (
      <Layout navMenuItems={menuItems} >
        <Typography>
        {archive && 
        <SEO 
        title='Title'
        description='Desc'
        />
        }
        <h1 sx={{pt:4}}>Fynn And Friends: Boston Terrier {archive.title}</h1>
        <Grid container spacing={4}>
            {posts.filter(posts => !!posts.node.categories.find(category=> category._id === archive._id)).map(post => (
              <Grid item xs={12} md={6} >
                <CardActionArea sx={{ height: '100%'}}>
                <Card sx={{height: '100%'}}>
              <Link to={`/`+post.node.slug.current}>
              <CardMedia>
              {post.node.featuredImage && <Img
            fluid={getFluidGatsbyImage(post.node.featuredImage,{ maxWidth: 800 }, clientConfig.sanity)}
            sx = {{
              width: '100%',
            }}
            alt = {post.node.featuredImage.alt && post.node.featuredImage.alt || undefined}
          /> || null }
          </CardMedia>
          <CardContent>
          <Styled.h4 sx={{minHeight: '60px'}}>{post.node.title}</Styled.h4>
          </CardContent>
              </Link>
              </Card>
              </CardActionArea>
              </Grid>
            ))}
            
          </Grid>
          {/* <div sx={{variant: 'variants.pagination'}}>
        <Grid container justify="space-between" >
          {!isFirst && (
            <Button variant="contained" >
              <Link
              to={prevPage}
              rel="prev"
            >
              {"<< Prev"}
              </Link>
            </Button>
          )}
          {Array.from({ length: numPages }, (_, i) => (
            <Grid item
              key={`pagination-number${i + 1}`}
            >
              <Link
                to={`${i === 0 ? "" : i + 1}`}
              >
                <Button variant="contained" >{i + 1}</Button>
              </Link>
            </Grid>
          ))}
          {!isLast && (
            <Button variant="contained" >
              <Link
                to={nextPage}
                rel="next"
              >
                {"Next >>"}
              </Link>
            </Button>
          )}
        </Grid>
      </div> */}
        </Typography>
        </Layout>
  )
}

export default ArchiveTemplate

export const query = graphql`
  query archiveQuery($id: String!) {    
    archive: sanityCategory(id: { eq: $id }) {
      id
      title
      _id
      description
      slug {
        current
      }
    }
    post: allSanityPost(
        sort: { fields: [publishedAt], order: DESC }
        filter: { slug: { current: { ne: null } } }
        ) {
        edges {
          node {
            id
            title
          
            slug {
                current
            }
            categories {
              title
              _id
            }
            publishedAt
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
        }
      }
  }
  `