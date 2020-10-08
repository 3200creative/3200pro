/** @jsx jsx */
import { jsx } from "theme-ui"
import SiteLayout from 'c32-gatsby-theme-core/src/components/layout'
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from '../../src/components/block-content'
import Hero from 'c32-gatsby-theme-components/src/components/ui/sanity-hero'
import { mapEdgesToNodes } from '../../src/lib/helpers'
export const query = graphql`
  query page404Query {
    page: sanityPage(title: {eq: "Homepage"}) {
      displayedTitle
      _rawBlockContent
      seo {
          metaDesc
          metaTitle
        }
    }
  }
`

const page404 = props => {
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
       'Missing "404" page data. Open the studio at http://localhost:3333 and add "Home" page data and restart the development server.'
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
          <h1>No Boston Terriers Here!</h1>
        </div>
      </Container>
    </SiteLayout>
  )
}

export default page404