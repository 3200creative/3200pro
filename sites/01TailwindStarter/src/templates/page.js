import React, { useState } from 'react'
import { graphql } from 'gatsby'

import GraphQLErrorList from 'tailwindcss-components/src/components/graphql-error-lists'
import SEO from 'tailwindcss-components/src/utils/seo'
import CtaSimple from 'tailwindcss-components/src/components/tailwindUI/ctaSections/ctaSimple'
import Layout from 'tailwindcss-components/src/components/layout'
import HeroSplitContentWithImage from 'tailwindcss-components/src/components/tailwindUI/heroes/split-content-with-image'
import Figure from '../components/block-content/Figure'
import ModularTextBlock from '../components/block-content/ModularTextBlock'
import BlockContent from '../components/block-content'
// TailwindUIComponents:
export const query = graphql`
  query PageTemplateQuery($id: String!) {
    route: sanityRoute(id: { eq: $id }) {
      slug {
        current
      }
      useSiteTitle
      page {
        ...PageInfo
      }
    }
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      openGraph {
        title
        description
        image {
          ...SanityImage
        }
      }
    }
  }
`

const Page = (props) => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const { site } = data || {}

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  const page = data.page || data.route.page

  const content = (page._rawContent || [])
    .filter((c) => !c.disabled)
    .map((c, i) => {
      let el = null
      switch (c._type) {
        case 'figure':
          el = <Figure key={c._key} {...c} />
          break
        case 'modularTextBlock':
          el = <ModularTextBlock key={c._key} {...c} blocks={c.text} />
          break
        case 'splitContentWithImage':
          el = <HeroSplitContentWithImage key={c._key} {...c} blocks={c.text} />
          break
        case 'ctaSimple':
          el = <CtaSimple key={c._key} {...c} blocks={c.text} />
          break
        default:
          el = null
      }
      return el
    })

  const menuItems = page.navMenu && (page.navMenu.items || [])
  const pageTitle = data.route && !data.route.useSiteTitle && page.title

  return (
    <Layout navMenuItems={menuItems} textWhite>
      <SEO
        title={page.seo.seo_title ? page.seo.seo_title : ''}
        description={page.seo.meta_description ? page.seo.meta_description : ''}
      />
      <div>{content}</div>
      {page._rawBlockContent && (
        <div>
          <BlockContent blocks={page._rawBlockContent} />
        </div>
      )}
    </Layout>
  )
}

export default Page
