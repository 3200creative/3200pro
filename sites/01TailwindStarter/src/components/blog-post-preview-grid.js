import { Link } from 'gatsby'
import React from 'react'
import BlogPostPreview from './blog-post-preview'

function BlogPostPreviewGrid(props) {
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
      <section
        sx={{
          marginTop: [0, null, null, 10],
        }}
      >
        {props.nodes &&
          props.nodes.map((node) => (
            <BlogPostPreview {...node} key={node.id} />
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

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: '',
}

export default BlogPostPreviewGrid
