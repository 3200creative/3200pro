/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from 'gatsby'
import React from 'react'
import TestimonialPreview from './testimonial-preview'

function TestimonialPreviewGrid (props) {
  return (
    <div>
      {props.title && (
        <h2
        sx={{
          fontSize: [4,null,null,10]
        }}
        >
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
            <TestimonialPreview {...node} key={node.id}/>
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

TestimonialPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default TestimonialPreviewGrid