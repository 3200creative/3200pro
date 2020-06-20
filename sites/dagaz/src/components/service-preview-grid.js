import { Link } from 'gatsby'
import React from 'react'
import ServicePreview from './service-preview'

function ServicePreviewGrid (props) {
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
      <section>
        {props.nodes &&
          props.nodes.map(node => (
            <ServicePreview {...node} key={node.id}/>
          ))}
      </section>
      {props.browseMoreHref && (
        <div>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  )
}

ServicePreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default ServicePreviewGrid