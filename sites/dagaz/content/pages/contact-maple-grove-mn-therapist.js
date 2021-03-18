import React from 'react'
import { graphql } from 'gatsby'
import SiteLayout from 'c32-gatsby-theme-core/src/components/layout'
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from '../../src/components/block-content'
import Typeform from 'c32-gatsby-theme-components/src/components/ui/typeform'
export const query = graphql`
  query ContactPageQuery {
    
    page: sanityContactPage(header: {eq: "Contact Dagaz Therapy"}) {
      header
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
      'Missing "Contact" page data. Open the studio at http://localhost:3333 and add "About" page data and restart the development server.'
    )
  }

  return (
    <SiteLayout>
      <SEO 
      title={page.seo.metaTitle}
      description={page.seo.metaDesc}
      />
      <Container>
        <h1>{page.header}</h1>
        <BlockContent blocks={page._rawBlockContent || []} />
        <Typeform 
          url= "https://get-started.typeform.com/to/ZpGKWD"
          buttonText = "Click Here To Contact By Email"
        />
      </Container>
    </SiteLayout>
  )
}

export default ContactPage