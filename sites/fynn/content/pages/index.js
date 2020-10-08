/** @jsx jsx */
import Grid from '@material-ui/core/Grid';
import { jsx } from "theme-ui"
//import React from 'react'
import { graphql, Link } from 'gatsby'
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import BackgroundImage from 'gatsby-background-image'
import Img from "gatsby-image"
import SiteLayout from 'c32-gatsby-theme-core/src/components/layout'
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from '../../src/components/block-content'
const sanityConfig = {projectId: 'lur7q35c', dataset: 'production'}


export const query = graphql`
  query HomePageQuery {
    page: sanityPage(title: {eq: "Homepage"}) {
      title
      _rawBlockContent
      seo {
          metaDesc
          metaTitle
        }
    }
  }
`

const Homepage = props => {
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
       'Missing "Home" page data. Open the studio at http://localhost:3333 and add "Home" page data and restart the development server.'
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
          variant: 'variants.homepage'
        }}
        >
          <h1>{page.title}</h1>
            <BlockContent blocks={page._rawBlockContent || []} />
        </div>
      </Container>
    </SiteLayout>
  )
}

export default Homepage