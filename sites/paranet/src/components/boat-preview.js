/* eslint no-unused-vars:0 */
/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { Link } from 'gatsby'
import React from 'react'
import Img from "gatsby-image"
import { getBoatUrl } from '../lib/helpers'
import BlockText from './block-text'
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import clientConfig from '../../client-config'
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function BoatPreview (props) {
  const image = props.featuredImage
  return (
    <Grid item xs={10} md={5} justify="space-around">
    
    <Card sx={{variant: 'archive.singleItem'}} >
    <div sx={{variant:'archive.singleItem.media'}}>
    {image && (<Img
      fluid={getFluidGatsbyImage(image,{ maxWidth: 800 }, {...clientConfig.sanity})} 
    />)}
    </div>
      <div
    sx={{
      variant: 'variants.postPreview.overlay',
      }}>
      <CardContent sx={{variant:'archive.singleItem.body'}}>
      <h4>{props.title}</h4>
        {props._rawExcerpt && (
            <BlockText blocks={props._rawExcerpt} />
        )}
      </CardContent>
      <CardActionArea sx={{variant:'archive.singleItem.footer'}}>
        <Link to={getBoatUrl(props.slug.current, props.boatType._id)}><Button size="large" color="primary">Go Fishing</Button></Link>
        <Link to={getBoatUrl(props.slug.current, props.boatType._id)}><Button size="large" color="primary">Learn More</Button></Link>
      </CardActionArea>
      </div>
    </Card>
    </Grid>
  )
}

export default BoatPreview