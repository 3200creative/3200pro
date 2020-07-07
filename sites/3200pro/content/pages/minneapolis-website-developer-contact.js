/** @jsx jsx */
import { jsx } from "theme-ui"
// import React from 'react'
// import { graphql } from 'gatsby'
import SiteLayout from 'c32-gatsby-theme-core/src/components/layout'
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from '../../src/components/block-content'
import Hero from 'c32-gatsby-theme-components/src/components/ui/sanity-hero'
import Blank from '../assets/blank.png'
import { mapEdgesToNodes } from '../../src/lib/helpers'
import ServicePreviewGrid from '../../src/components/service-preview-grid'
import { motion, useViewportScroll,  useTransform, useMotionValue, useRef} from "framer-motion"
import Typeform from 'c32-gatsby-theme-components/src/components/ui/typeform'


export const query = graphql`
  query ContactPageQuery {
    page: sanityPage(_id: {eq: "contactPage"}) {
      displayedTitle
      _rawBlockContent
      seo {
          metaDesc
          metaTitle
        }
    }
  }
`

const ContactPage = props => {
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
       'Missing "About" page data. Open the studio at http://localhost:3333 and add "About" page data and restart the development server.'
     )
   }


  

  return (
    <SiteLayout>
       <SEO 
       title={page.seo.metaTitle} 
       description={page.seo.metaDesc} 
       />
      <Container
      >
        <div
          sx= {{
            variant: 'variants.standardPage'
          }}
        >
        <h1>{page.displayedTitle}</h1>
        <BlockContent blocks={page._rawBlockContent || []} />
        <Typeform 
          url= "https://demo.typeform.com/to/ubSb8Qjn"
          buttonText = "Click Here To Contact By Email"
        />
        </div>
      </Container>
    </SiteLayout>
  )
}

export default ContactPage