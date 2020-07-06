/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useContext} from 'react'
import { format, distanceInWords, differenceInDays } from 'date-fns'
import Img from "gatsby-image"
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from "gatsby"
import { Grid } from 'theme-ui'
import { Box } from 'theme-ui'
import {mapEdgesToNodes, filterOutDocsWithoutSlugs} from '../../lib/helpers'
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import Masonry from 'react-masonry-component';
// import { GridLayoutContext } from '../articleFeedLayout'
// import { GridLayoutProvider } from '../articleFeedLayout'
import ArticleLayoutToggle  from '../ArticleLayoutToggle'
import { GridLayoutContext } from '../articleFeedLayout'


function RecentPostFeed (props) {
  const data = useStaticQuery(graphql`
    query  { 
      business: allSanityBusiness(
        sort: { fields: [publishedAt], order: DESC }
        filter: { slug: { current: { ne: null } } }
        ) {
        edges {
          node {
            id
            title
          
            slug {
                current
            }
            excerpt
            publishedAt
            featuredImage {
                asset {
                  fluid(maxWidth: 600) {
                    ...GatsbySanityImageFluid
                  }
                }
                alt
            }
          }
        }
      }
      life: allSanityLife(
        sort: { fields: [publishedAt], order: DESC }
        filter: { slug: { current: { ne: null } } }
        ) {
        edges {
          node {
            id
            title
          
            slug {
                current
            }
            excerpt
            publishedAt
            featuredImage {
                asset {
                  fluid(maxWidth: 600) {
                    ...GatsbySanityImageFluid
                  }
                }
                alt
            }
          }
        }
      }
      tea: allSanityTea(
        sort: { fields: [publishedAt], order: DESC }
        filter: { slug: { current: { ne: null } } }
        ) {
        edges {
          node {
            id
            title
          
            slug {
                current
            }
            excerpt
            publishedAt
            featuredImage {
                asset {
                  fluid(maxWidth: 600) {
                    ...GatsbySanityImageFluid
                  }
                }
                alt
            }
          }
        }
      }
      music: allSanityMusic(
        sort: {fields: [publishedAt], order: DESC }
        filter: { slug: { current: { ne: null } } }
        ) {
        edges {
          node {
            id
            title
          
            slug {
                current
            }
            excerpt
            publishedAt
            featuredImage {
                asset {
                  fluid(maxWidth: 600) {
                    ...GatsbySanityImageFluid
                  }
                }
                alt
            }
          }
        }
      }
    }
  `)
  
  let contentType = props.contentType
  let maxCount = null
  let base = contentType
  const businessPosts = data && data.business.edges
  const lifePosts = data && data.life.edges
  const teaPosts = data && data.tea.edges
  const musicPosts = data && data.music.edges
  const count = props.postCount
  switch(contentType) {
    case 'business':
      contentType = businessPosts
      base = 'business'
      maxCount = contentType.length
      break
    case 'tea':
      contentType = teaPosts
      base = 'tea'
      maxCount = contentType.length
      break
    case 'music':
      contentType = musicPosts
      base = 'music'
      maxCount = contentType.length
      break
    case 'life':
      contentType = lifePosts
      base = 'life'
      maxCount = contentType.length
      break
  }
  
  const { gridLayout = 'lists', hasSetGridLayout, setGridLayout, getGridLayout } = useContext(
    GridLayoutContext,
  );


  return (
    <>
    <ArticleLayoutToggle />
    
    <Masonry
      className={'my-gallery-class'} // default ''
      elementTypeg={'div'} // default 'div'
      disableImagesLoaded={false} // default false
      updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
    >
    {contentType.slice(0, Math.min(100, maxCount)).map(post => (
      <Grid key={post.node.key}
      gridLayout={gridLayout}
      gap={5}
      columns={[
        'unset',
        gridLayout === 'lists' && '1fr 2fr' || 'unset']}
      sx= {{
        my: 4,
        width: gridLayout === 'lists' && '100%' || '50%',
       }}
      >
        
      <Box sx= {{
        height: '225px',
        maxWidth: '560px',
        width: ['100%','30vw'],
        overflow: 'hidden',
        variant: 'variants.shadow',
      }}>
        <Link to={post.node.slug.current}>
        <div
        sx= {{
          position: 'relative',
          top: '-50%',
        }}
        >
         <Img fluid={post.node.featuredImage.asset.fluid} alt="Test"
          sx= {{
            height: '225px',
            maxWidth: '560px',
            width: '30vw',
          }}
         />
        </div>
        </Link>
      </Box>
      <Box
      sx = {{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      >
        <h4 sx= {{
          m: 0,
          color: 'text',
          fontFamily:  'header',
        }}><Link to={post.node.slug.current}
          sx= {{
            color: 'text',
          }}
        >{post.node.title}</Link></h4>
        <p sx= {{
          py: 0,
          fontSize: 1,
          color: 'grayTxt',
          }}
        >{post.node.excerpt}</p>
        <div
        sx={{
          color: 'lightTxt',
          fontSize: 1,
          opacity: '.33',
        }}
        >
        {differenceInDays(new Date(post.node.publishedAt), new Date()) > 3
          ? distanceInWords(new Date(post.node.publishedAt), new Date())
          : format(new Date(post.node.publishedAt), 'MMMM Do YYYY')}
         </div>
      </Box>
      </Grid>
    ))}
    </Masonry>
    </>
  )
}

export default RecentPostFeed;