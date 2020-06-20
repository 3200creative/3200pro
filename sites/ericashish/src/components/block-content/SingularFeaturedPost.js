/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'
import { Grid, Box } from 'theme-ui'
import { Link } from 'gatsby'
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import clientConfig from '../../../client-config'

function SingularFeaturedPost (props) {
  const postTitle = props.featuredPost.title
  const postType = props.featuredPost._type
  const categoryURL = `/${postType}/`
  const postSlug = props.featuredPost.slug.current
  const postExcerpt = props.featuredPost.excerpt
  const postURL = `${postType}/${postSlug}`
  const postImage = props.featuredPost.featuredImage.asset._id

  
  return (
    <Grid
    gap={5}
    columns={[2, '1fr 2fr']}>
      <Box>
        <Link to={postURL}><Img fluid={getFluidGatsbyImage(postImage,{ maxWidth: 800 }, {...clientConfig.sanity})} alt="Test"/></Link>
      </Box>
      <Box>
        <Link to={categoryURL}>{postType}</Link>
        <Link to={postURL}>
          <h1>Featured Post: {postTitle}</h1>
          <p>{postExcerpt}</p>
          </Link>
      </Box>
    </Grid>
  )
}

export default SingularFeaturedPost;