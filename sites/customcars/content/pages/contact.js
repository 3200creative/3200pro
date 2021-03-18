/** @jsx jsx */
import { jsx } from 'theme-ui'
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
    
    page: sanityContactPage {
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
        <div
        sx= {{ 
          backgroundColor: '#000',
          width: '100vw',
          position: 'relative',
          marginLeft: '-50vw',
          left: '50%',
          height: '100vh'
        }}
        >
        <h1
        sx= {{
          color: 'white',
          margin: '0',
          textAlign: 'center',
          paddingTop: 4
        }}
        >{page.header}</h1>
        <div
        sx= {{
          m: 2,
          overflow: 'hidden',
          
        }}
        >
        <Typeform 
          url= "https://get-started.typeform.com/to/NutWBI#source=customcarsbygizmos"
          buttonText = "Click Here To Contact By Email"
        />
        </div>
        </div>
      </Container>
    </SiteLayout>
  )
}

export default ContactPage