/** @jsx jsx */
import { jsx } from "theme-ui"
//import React from 'react'
import { graphql } from 'gatsby'
import SiteLayout from 'c32-gatsby-theme-core/src/components/layout'
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from '../../src/components/block-content'

export const query = graphql`
  query PrivacyPageQuery {
    page: sanityPage(title: {eq: "Privacy Policy"}) {
      displayedTitle
      _rawBlockContent
      seo {
          metaDesc
          metaTitle
        }
    }
  }
`

const PrivacyPage = props => {
   const { data, errors } = props

   if (errors) {
     return (
       <Layout>
         <GraphQLErrorList errors={errors} />
       </Layout>
     )
   }

   const page = data && data.page
   if (!page) {
     throw new Error(
       'Missing "Privacy" page data. Open the studio at http://localhost:3333 and add "Privacy" page data and restart the development server.'
     )
   }


  

  return (
    <SiteLayout>
       <SEO 
       title={page.seo.metaTitle} 
       description={page.seo.metaDesc} 
       />
      <Container>
        <div
        sx= {{
          variant: 'variants.landingPage'
        }}
        >
          <h1>{page.displayedTitle}</h1>
          <BlockContent blocks={page._rawBlockContent || []} />
        </div>
      </Container>
    </SiteLayout>
  )
}

export default PrivacyPage