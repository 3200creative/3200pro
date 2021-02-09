/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import clientConfig from "../../client-config";
import Grid from '@material-ui/core/Grid'
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import  Layout  from "c32-gatsby-theme-core/src/components/layoutV2"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { getCategoryURL } from "../lib/getCategoryURL";
import { useSiteMetadata } from "c32-gatsby-theme-core"
import Button from '@material-ui/core/Button'

function renderNumbers(pagination, category) {
  return new Array(pagination.last + 1).fill(0).map((_, index) => {
    if (pagination.current == index) {
      return <div key={index}>{index + 1}</div>;
    }

    return (
      <Grid item key={index}>
        <Link to={getCategoryURL(category, index)}><Button variant="contained" >{index + 1}</Button></Link>
      </Grid>
    );
  });
}


export default function Pagination(props) {
  const { posts, category, pagination } = props.pageContext;
  const { fallBackFeaturedImage, fallBackFeaturedImageAlt, globalNavMenu } = useSiteMetadata()
  const menuItems = globalNavMenu;
  return (
    <Layout navMenuItems={menuItems}>
      <Grid container spacing={4}>
            {posts.map(post => (
              <Grid item item xs={12} md={6} >
                <CardActionArea sx={{ height: '100%'}}>
                <Card sx={{height: '100%'}}>
              <Link to={`/`+post.slug.current}>
              <CardMedia>
              {post.featuredImage ? <Img
            fluid={getFluidGatsbyImage(post.featuredImage,{ maxWidth: 420 }, clientConfig.sanity)}
            sx = {{
              width: '100%',
            }}
            alt = {post.featuredImage && post.featuredImage.alt || undefined}
          /> : <Img
          fluid={getFluidGatsbyImage(fallBackFeaturedImage,{ maxWidth: 420 }, clientConfig.sanity)}
          sx = {{
            width: '100%',
          }}
          alt = {fallBackFeaturedImageAlt && fallBackFeaturedImageAlt || undefined}
        /> }
          </CardMedia>
          <CardContent>
          <Styled.h4 sx={{minHeight: '60px'}}>{post.title}</Styled.h4>
          </CardContent>
              </Link>
              </Card>
              </CardActionArea>
              </Grid>
            ))}
            
          </Grid>
          <div sx={{variant: 'variants.pagination'}}>
          <Grid container justify="space-between">
        {pagination.previous && (
        <Button variant="contained" >
            <Link to={pagination.previous}>Previous Page</Link>
          </Button>
        )}
        {renderNumbers(pagination, category)}

        {pagination.next && (
          <Button variant="contained" >
            <Link to={pagination.next}>Next Page</Link>
          </Button>
        )}
        </Grid>
        </div>
    </Layout>
  );
}