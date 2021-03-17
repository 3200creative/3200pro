import React from 'react'
import { graphql } from 'gatsby'
import { SEO, useSiteMetadata } from 'tailwindcss-components'
import Layout from 'tailwindcss-components/src/components/layout'
import GraphQLErrorList from 'tailwindcss-components/src/components/graphql-error-lists'
import Container from 'tailwindcss-components/src/components/container'
import BlockContent from '../components/block-content'

const PageTemplate = (props) => {
  const { data, errors } = props
  const page = data && data.page
  const { globalNavMenu, globalContactMenu } = useSiteMetadata()
  const menuItems = globalNavMenu && (globalNavMenu.items || [])
  const contactMenu = globalContactMenu
  const pageTitle = data.route && !data.route.useSiteTitle && page.title
  return (
    <Layout navMenuItems={menuItems} contactMenuItems={contactMenu} textWhite>
      {errors && <SEO title="GraphQL Error" />}
      {page && (
        <SEO
          title={page.seo.metaTitle && page.seo.metaTitle}
          description={page.seo.metaDesc && page.seo.metaDesc}
        />
      )}
      <Container>{errors && <GraphQLErrorList errors={errors} />}</Container>
      {page && <h1>{page.title}</h1>}
      {page._rawBlockContent && <BlockContent blocks={page._rawBlockContent} />}
      <div />
    </Layout>
  )
}

export default PageTemplate

export const query = graphql`
  query singularPostQuery($id: String!) {
    page: sanityPost(id: { eq: $id }) {
      id
      title
      slug {
        current
      }
      seo {
        seo_title
        meta_description
      }
      _rawBlockContent
    }
  }
`
