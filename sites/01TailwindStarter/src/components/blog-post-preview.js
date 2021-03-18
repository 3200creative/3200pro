import { Link } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import { getBlogUrl } from '../lib/helpers'
import BlockText from './block-text'

const sanityConfig = { projectId: 'p6aj32cv', dataset: 'production' }

function BlogPostPreview(props) {
  return (
    <div>
      <div>
        <Link to={getBlogUrl(props.publishedAt, props.slug.current)}>
          <Img
            fluid={getFluidGatsbyImage(
              props.featuredImage,
              { maxWidth: 800 },
              sanityConfig
            )}
            alt={props.featuredImage.alt}
          />
        </Link>
      </div>
      <div>
        <Link to={getBlogUrl(props.publishedAt, props.slug.current)}>
          <h2>{props.title}</h2>
          {props._rawExcerpt && (
            <span>
              <BlockText blocks={props._rawExcerpt} />
            </span>
          )}
        </Link>
      </div>
    </div>
  )
}

export default BlogPostPreview
