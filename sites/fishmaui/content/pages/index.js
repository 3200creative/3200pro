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
const sanityConfig = {projectId: '4m7jmrdc', dataset: 'production'}


export const query = graphql`
  query HomePageQuery {
    page: sanityLandingPage(adminTitle: {eq: "Homepage"}) {
      displayedTitle
      subTitle
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
    heroImage: file( relativePath: { eq: "maui-fishing.jpg" } ) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
    }
  }
`

const Homepage = props => {
   const { data, errors } = props
   const heroMenu = data.page.heroMenu
   const { heroImage } = props.data;
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
        <section sx= {{variant: 'variants.hero'}}>
        <div sx= {{
          position: 'absolute',
          objectFit: 'cover',
          objectPosition: 'center center',
          maxWidth: '100%',
          width: '1500px',
          height: '80vh',
          top: 0,
          opacity: '.5',
          overflow: 'hidden'
        }}><Img fluid={heroImage.childImageSharp.fluid} 
        sx={{
          width: '1500px',
          maxWidth: [null,null,'100%', null],
          minHeight: ['100vh', null, null,'60vh'],
        }}
        />
        </div>
        <Grid container spacing={8} style={{margin: '6vh 1vh 6vh 1vh', width: '98%'}}>
          <Grid item xxs={12} md={6} xl={8} sx={{
            zIndex: '99999',
            }}>
            <h1>{page.displayedTitle}</h1>
            <p>{page.subTitle}</p>
            <BlockContent blocks={page._rawHeroText || []} />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
          <Grid container spacing={3}>
            {heroMenu.button ? heroMenu.button.map(btn => (
              <Grid item xs={6}>
              <Link to={btn.href} sx={{variant: 'variants.heroBtns'}}>
                <Img sx={{
                  variant: 'variants.shadow',
                  maxWidth: '100%',
                  margin: '0 auto',
                  float: 'none',
                  display: 'block',
                  }}
                  fluid={getFluidGatsbyImage(btn.menuImage.asset._id,{ maxWidth: 300 }, sanityConfig)}
                  alt={btn.menuImage.alt}
                  loading='lazy'
                />
                <div sx={{
                  zIndex: '9', 
                  position: 'absolute', 
                  marginTop: '-30px',
                  marginLeft: '10px',
                  fontSize: '16px',
                  color: 'white',
                  textTransform: 'uppercase'
                  }}>{btn.buttonTxt}</div>
                
              </Link>
              </Grid>
            )) : null}
            </Grid>
            </Grid>
          </Grid>
          <Grid container sx={{
            position: 'relative',
            zIndex: '9999999',
            width: '1500px!important',
            maxWidth: '100%!important'
          }} >
            <Grid item xs={6} sx={{
            width: '50%',
            px: 4,
            variant: 'variants.homeLeft',
            h2: {
              color: 'white',
              fontWeight: '300',
              textTransform: 'uppercase',
              marginBottom: 5
            },
            h3: {
              a: {
                color: 'white',
                fontWeight: '300',
                textTransform: 'uppercase'
              },
            },
            }}><BlockContent blocks={page._rawLeftContent || []} /></Grid>
            <Grid item xs={6} 
            sx={{
            width: '50%', 
            variant: 'variants.homeRight'}}><BlockContent blocks={page._rawRightContent || []} /></Grid>
          </Grid>
        </section>
        </div>
      </Container>
    </SiteLayout>
  )
}

export default Homepage