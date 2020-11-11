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
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardFooter from '@material-ui/core/Card';
import CardBody from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'transparent'
  },
  gridItem: {
    height: '100%'
  },
  card: {
    padding: theme.spacing(2),
    textAlign: 'center',
    cardFooter: '0px',
    minHeight: '100%',
  },
  cardBody: {
    borderRadius: '0px',
  },
  cardFooter: {
    borderRadius: '0px'
  }
}));

function BoatPreview (props) {
  const image = props.featuredImage
  const classes = useStyles();
  return (
    <Grid container justify='center' alignItems='center' spacing={3} xs={10} md={6} lg={4}> 
    <Grid item className={classes.gridItem}>
    <Card className={classes.card} rounded={0} item sx={{variant: 'archive.singleItem'}} >
    <CardBody rounded={0} className={classes.cardBody} sx={{variant:'archive.singleItem.body'}}>
    {image && (<Link to={getBoatUrl(props.slug.current, props.boatType._id)}><Img
      fluid={getFluidGatsbyImage(image,{ maxWidth: 800 }, {...clientConfig.sanity})}
      alt={image.alt} 
    /></Link>)}
      <Link to={getBoatUrl(props.slug.current, props.boatType._id)}><h4>{props.title}</h4></Link>
        {props._rawExcerpt && (
            <BlockText blocks={props._rawExcerpt} />
        )}
      </CardBody>
      <CardFooter className={classes.cardFooter}>
      <CardActionArea>
        <Link to={getBoatUrl(props.slug.current, props.boatType._id)}><Button size="large" color="primary">Go Fishing</Button></Link>
        <Link to={getBoatUrl(props.slug.current, props.boatType._id)}><Button size="large" color="primary">Learn More</Button></Link>
      </CardActionArea>
      </CardFooter>
    </Card>
    </Grid>
    </Grid>
  )
}

export default BoatPreview