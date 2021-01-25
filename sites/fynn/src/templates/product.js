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

const PageTemplate = props => {
    const { singleProductMenu } = useSiteMetadata()
    const { data, errors } = props
    const page = data && data.page
    const menuItems = page.navMenu || singleProductMenu || [];
    return (
      <Layout navMenuItems={menuItems} >
        <Typography>
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
        <div css={{marginTop: '180px', width: '100px'}}></div>
        <Grid container spacing={4}>
        <Grid item xs={12} md={6}><Img
      fluid={getFluidGatsbyImage(page.featuredImage,{ maxWidth: 800 }, {...clientConfig.sanity})}
      sx = {{
        width: '100%',
      }}
      alt = {page.featuredImage.alt ? page.featuredImage.alt : undefined}
    /></Grid>
          <Grid item xs={12} md={6}><Styled.h1>{page.title}</Styled.h1>
            {page._rawBlockContent && <BlockContent blocks={page._rawBlockContent}/>}
            
          <div>
            <Button variant="contained" size="large" color="primary" align="center" href={page.href}>
              Buy It Here!
            </Button></div>
        </Grid>
        <Grid item xs={12}>
          <Styled.h2 sx={{mt:7}}>Related Products:</Styled.h2>
          <Grid container spacing={4}>
            
            {page.randomProductList.map(relatedProducts =>(
              <Grid item xs={6} md={4}>
              <CardActionArea sx={{ height: '100%'}}>
              <Card sx={{height: '100%'}}>
                  <Link to={`/shop/`+relatedProducts.slug.current}>
                  <CardMedia>
                  {relatedProducts.featuredImage && <Img
                fluid={getFluidGatsbyImage(relatedProducts.featuredImage,{ maxWidth: 800 }, clientConfig.sanity)}
                sx = {{
                  width: '100%',
                }}
                alt = {relatedProducts.featuredImage.alt && relatedProducts.featuredImage.alt || undefined}
              /> || null }
              </CardMedia>
              <CardContent>
              <Styled.h4>{relatedProducts.title}</Styled.h4>
              </CardContent>
                  </Link>
                  </Card>
                  </CardActionArea>
                  </Grid>
            ))}
          </Grid>
        </Grid>
        </Grid>

        </Typography>
        </Layout>
  )
}

export default PageTemplate

export const query = graphql`
  query singularProductQuery($id: String!) {    
    page: sanityProduct(id: { eq: $id }) {
        id
        title
        slug {
            current
        }
        href
        seo {
          meta_description
          seo_title
        }
        featuredImage {
            asset {
              _id
            }
            alt
        }
        randomProductList {
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