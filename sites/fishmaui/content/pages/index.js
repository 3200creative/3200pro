/** @jsx jsx */
import { jsx } from "theme-ui"
//import React from 'react'
import { graphql, Link } from 'gatsby'
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import Img from "gatsby-image"
import SiteLayout from 'c32-gatsby-theme-core/src/components/layout'
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from '../../src/components/block-content'
import Grid from '@material-ui/core/Grid';
const sanityConfig = {projectId: '4m7jmrdc', dataset: 'production'}


export const query = graphql`
  query HomePageQuery {
    page: sanityLandingPage(adminTitle: {eq: "Homepage"}) {
      displayedTitle
      _rawHeroText
      _rawLeftContent
      _rawRightContent
      heroMenu {
        button {
          buttonTxt
          href
          menuImage {
            alt
            asset {
              _id
              url
            }
          }
        }
      }
      seo {
          metaDesc
          metaTitle
        }
    }
  }
`

const Homepage = props => {
   const { data, errors } = props
   const heroMenu = data.page.heroMenu
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
          variant: 'variants.landingPage'
        }}
        ><Grid container spacing={8}>
          <Grid item xs={12} md={6} xl={8}>
            <h1>{page.displayedTitle}</h1>
            <BlockContent blocks={page._rawHeroText || []} />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
          <Grid container spacing={3}>
            {heroMenu.button ? heroMenu.button.map(btn => (
              <Grid item xs={6}>
              <Link to={btn.href} sx={{variant: 'variants.heroBtns'}}>
                <Img sx={{
                  variant: 'variants.shadow',
                  maxWidth: '900px',
                  margin: '0 auto',
                  float: 'none',
                  display: 'block',
                  }}
                  fluid={getFluidGatsbyImage(btn.menuImage.asset._id,{ maxWidth: 300 }, sanityConfig)}
                  alt={btn.menuImage.alt}
                  loading='lazy'
                />
                {btn.buttonTxt}
                
              </Link>
              </Grid>
            )) : null}
            </Grid>
            </Grid>
          </Grid>
          <Grid container sx={{variant: 'variants.homeTwoSection'}}>
            <Grid item xs={6} sx={{variant: 'variants.homeLeft'}}><BlockContent blocks={page._rawLeftContent || []} /></Grid>
            <Grid item xs={6} sx={{variant: 'variants.homeRight'}}><BlockContent blocks={page._rawRightContent || []} /></Grid>
          </Grid>
        </div>
      </Container>
    </SiteLayout>
  )
}

export default Homepage