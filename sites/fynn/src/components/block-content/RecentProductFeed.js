/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
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
import Button from '@material-ui/core/Button';
import { GrCircleInformation } from "@react-icons/all-files/gr/GrCircleInformation";


function RecentProductFeed (props, location) {
  const data = useStaticQuery(graphql`
    query  {
      site {
        siteMetadata {
          siteUrl
        }
      }
      product: allSanityProduct(
        sort: { fields: [publishedAt], order: DESC }
        filter: { slug: { current: { ne: null } }}
        ) {
        edges {
          node {
            id
            title
            href
            soldOn {
              title
              href
            }
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
  `)
  

  const products = data ? data.product.edges : null
  // const category = props.contentType.title.toLowerCase()
  const maxCount = 20
  const url = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <section sx={{variant: 'variants.productFeed'}}>
    <Grid container spacing={4}>
      <Grid item xs={12}><Styled.h2>{props.title}</Styled.h2></Grid>
      {products.filter(!props.allCategories ? products => !!products.node.categories.find(category=> category._id === props.contentType._id) : products => !!products.node.categories.find(category=> category === category)).slice(0, Math.min(props.productCount ? props.productCount : 100, maxCount)).map(product => (
        <Grid item xs={12} md={6} >
          <Card sx={{height: '100%'}}>
        <Link to={'/shop'+`/`+product.node.slug.current}>
        <CardActionArea>
        <CardMedia>
        {product.node.featuredImage && <Img
      fluid={getFluidGatsbyImage(product.node.featuredImage,{ maxWidth: 800 }, clientConfig.sanity)}
      sx = {{
        width: '100%', 
      }}
      alt = {product.node.featuredImage.alt && product.node.featuredImage.alt || undefined}
    /> || null }
    </CardMedia>
    </CardActionArea>
    </Link>
    <CardContent sx={{ backgroundColor: 'background2'}}>
    <Styled.h4 css={{width: '100%', textAlign:'center', minHeight: '60px'}}><a href={product.node.href}>{product.node.title}</a></Styled.h4>
    {product.node.soldOn ? <div css={{width: '100%', textAlign:'center', marginBottom:'20px'}}>Sold On: <a href={product.node.soldOn.href}>{product.node.soldOn.title}</a></div> : null}
    <Grid container direction="row"justify="center" alignItems="center">
    <a href={product.node.href}>
    <Button item variant="contained" color="default" size="large" className="button">
        Learn More
    </Button>
    </a>
    </Grid>
    </CardContent>
    <Link to={'/shop'+`/`+product.node.slug.current} css={{float:'right'}}><Button   color="primary" size="large"><span css={{fontSize: '20px'}}><GrCircleInformation/></span></Button></Link>
        </Card>
        
        </Grid>
      ))}
    </Grid>
    {props.showArchiveBtn && <div css={{margin: '40px auto', float: 'none', width: 'max-content'}}><Link to ={`shop`}><button sx={{variant: 'variants.button'}}>View All Products</button></Link></div>|| null}
    </section>
  )
}

export default RecentProductFeed;