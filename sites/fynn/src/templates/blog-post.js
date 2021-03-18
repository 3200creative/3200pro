/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { SEO } from "c32-gatsby-theme-core"
import { useSiteMetadata } from "c32-gatsby-theme-core"
import  Layout  from "c32-gatsby-theme-core/src/components/layoutV2"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from '../components/block-content'
import Grid from '@material-ui/core/Grid'
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import clientConfig from "../../client-config";

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
        title= {page.seo.seo_title ? page.seo.seo_title : page.title}
        description= {page.seo.meta_description ? page.seo.meta_description : `Boston Terrier Article: ${page.title}` }
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
        <div sx={{variant: 'variants.clearline'}}></div>
        { !page.disableRelatedProducts && 
          <Grid item xs={12}>
            {page.randomProductList && <Styled.h4 sx={{mt:5}}>Related Boston Terrier Products:</Styled.h4>}
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
        }
        <div sx={{variant: 'variants.clearline', my: 4}}></div>
        { !page.disableRelatedPosts && 
          <Grid item xs={12}>
            {page.randomPostList && <Styled.h4 sx={{mt:4}}>Related Boston Terrier Articles:</Styled.h4>}
            <Grid container spacing={4}>
              
              {page.randomPostList.map(relatedPost =>(
                <Grid item xs={6} md={4}>
                <CardActionArea sx={{ height: '100%'}}>
                <Card sx={{height: '100%'}}>
                    <Link to={`/shop/`+relatedPost.slug.current}>
                    <CardMedia>
                    {relatedPost.featuredImage && <Img
                  fluid={getFluidGatsbyImage(relatedPost.featuredImage,{ maxWidth: 800 }, clientConfig.sanity)}
                  sx = {{
                    width: '100%',
                  }}
                  alt = {relatedPost.featuredImage.alt && relatedPost.featuredImage.alt || undefined}
                /> || null }
                </CardMedia>
                <CardContent>
                <Styled.h4>{relatedPost.title}</Styled.h4>
                </CardContent>
                    </Link>
                    </Card>
                    </CardActionArea>
                    </Grid>
              ))}
            </Grid>
          </Grid>
        }
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
        disableRelatedPosts
        disableRelatedProducts
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
        randomPostList {
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