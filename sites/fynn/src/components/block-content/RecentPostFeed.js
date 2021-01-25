/** @jsx jsx */
import { jsx, Styled} from "theme-ui"
import React, { useContext} from 'react'
import { graphql, useStaticQuery, Link } from "gatsby"
import clientConfig from "../../../client-config";
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import Img from "gatsby-image"
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

function RecentPostFeed (props, location) {
  const data = useStaticQuery(graphql`
    query  {
      site {
        siteMetadata {
          siteUrl
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
              _id
              title
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
  `)
  

  const posts = data ? data.post.edges : null
  const category = props.contentType.title.toLowerCase()
  const maxCount = 20
  const url = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <section sx={{variant: 'variants.postFeed'}}>
    <Grid container spacing={4}>
      <Grid item xs={12}><Typography variant="h4">{props.title}</Typography></Grid>
      {posts.filter(!props.allCategories ? posts => !!posts.node.categories.find(category=> category._id === props.contentType._id) : posts => !!posts.node.categories.find(category=> category === category)).slice(0, Math.min(props.postCount ? props.postCount : 100, maxCount)).map(post => (
        <Grid item xs={12} md={6} >
          <CardActionArea sx={{ height: '100%'}}>
          <Card sx={{height: '100%' }}>
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
    <CardContent sx={{ backgroundColor: 'background2'}}>
    <Styled.h4 sx={{minHeight: '60px'}}>{post.node.title}</Styled.h4>
    </CardContent>
        </Link>
        </Card>
        </CardActionArea>
        </Grid>
      ))}
    </Grid>
    {props.showArchiveBtn && <div css={{margin: '40px auto', float: 'none', width: 'max-content'}}><Link to ={`shop`}><button sx={{variant: 'variants.button'}}>View All Products</button></Link></div> || null}
    </section>
  )
}

export default RecentPostFeed;