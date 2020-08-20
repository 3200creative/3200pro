import { Link } from 'gatsby'
import React from 'react'
import BoatPreview from './boat-preview'
import Grid from '@material-ui/core/Grid';

function BoatPreviewGrid (props) {
  return (
    <div>
      {props.title && (
        <h2>
          {props.browseMoreHref ? (
            <Link to={props.browseMoreHref}>{props.title}</Link>
          ) : (
            props.title
          )}
        </h2>
      )}
      <Grid container justify="space-around">

        {props.nodes &&
          props.nodes.map(node => (
            <BoatPreview {...node} key={node.id}/>
          ))}
      </Grid>
      {props.browseMoreHref && (
        <div>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  )
}

BoatPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BoatPreviewGrid