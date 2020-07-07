/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'
import { graphql } from 'gatsby'
import SiteLayout from 'c32-gatsby-theme-core/src/components/layout'
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import { mapEdgesToNodes } from '../../src/lib/helpers'
import TestimonialPreviewGrid from '../../src/components/testimonial-preview-grid'

export const query = graphql`
  query testimonialArchiveQuery {
    testimonial: allSanityTestimonial(
      filter: { title: { ne: null }}
      ){
      edges {
        node {
          title
          _rawBlockContent
          source
        }
      }
    }
  }
`

const Services = props => {
  const { data, errors } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const testimonial = data && data.testimonial && mapEdgesToNodes(data.testimonial)

  if (!testimonial) {
    throw new Error(
      'missing testimonial archive data.'
    )
  }

  return (
    <SiteLayout>
      <SEO title='title' />
      <Container>
      <div
        sx= {{
          variant: 'variants.standardPage'
        }}
        >
      {testimonial && testimonial.length > 0 && <TestimonialPreviewGrid nodes={testimonial} />}
      </div>
      </Container>
    </SiteLayout>
  )
}
    

export default Services