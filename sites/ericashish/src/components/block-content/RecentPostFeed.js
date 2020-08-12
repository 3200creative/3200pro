/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useContext} from 'react'
import { format, distanceInWords, differenceInDays } from 'date-fns'
import Img from "gatsby-image"
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from "gatsby"
// import { Grid } from 'theme-ui'
// import { Box } from 'theme-ui'
import {mapEdgesToNodes, filterOutDocsWithoutSlugs} from '../../lib/helpers'
import { buildImageObjMap } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import Masonry from 'react-masonry-component';
// import { GridLayoutContext } from '../articleFeedLayout'
// import { GridLayoutProvider } from '../articleFeedLayout'
import ArticleLayoutToggle  from '../ArticleLayoutToggle'
import { GridLayoutContext } from '../articleFeedLayout'
import Grid from '@material-ui/core/Grid';

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
                  _id
                  url
                  fluid(maxWidth: 600) {
                    ...GatsbySanityImageFluid
                  }
                  source {
                    url
                  }
                }
                crop {
                  bottom
                  left
                  top
                  right
                }
                hotspot {
                  x
                  y
                  height
                  width
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
                  _id
                  url
                  fluid(maxWidth: 600) {
                    ...GatsbySanityImageFluid
                  }
                  source {
                    url
                  }
                }
                crop {
                  bottom
                  left
                  top
                  right
                }
                hotspot {
                  x
                  y
                  height
                  width
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
                  _id
                  url
                  fluid(maxWidth: 600) {
                    ...GatsbySanityImageFluid
                  }
                  source {
                    url
                  }
                }
                crop {
                  bottom
                  left
                  top
                  right
                }
                hotspot {
                  x
                  y
                  height
                  width
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
                  _id
                  url
                  fluid(maxWidth: 600) {
                    ...GatsbySanityImageFluid
                  }
                  source {
                    url
                  }
                }
                crop {
                  bottom
                  left
                  top
                  right
                }
                hotspot {
                  x
                  y
                  height
                  width
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
    
    <Grid container justify="space-between">
    {contentType.slice(0, Math.min(100, maxCount)).map(post => (
      <Grid container key={post.node.key} xs={12} md={gridLayout === 'lists' && 12 || 6} sx={{py:4}}>
        
        <Grid item xs={12} md={gridLayout === 'lists' && 6 || 12} sx={{height:gridLayout === 'lists' && [null, null, null, '285px'] || [null, null, null, '360px'], }}>
          <Link to={post.node.slug.current}>
            <img
            src={imageUrlFor(buildImageObjMap(post.node.featuredImage))
            .auto('format')
            .url()
            }
            alt='test'
            sx= {{
              width: '96%',
              maxHeight: [null, null, null, '285px'],
              variant: 'variants.shadow',
            }}
            />
          </Link>
        </Grid>
        <Grid item xs={12} md={gridLayout === 'lists' && 6 || 12} sx={{
          display: [null, null, null,  gridLayout === 'lists' && 'flex' || 'block'],
          flexDirection: [null, null, null, gridLayout === 'lists' && 'column' || 'none'],
          justifyContent: [null, null, null,  gridLayout === 'lists' && 'center' || 'none'],
          height: '100%',
        }}  >
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
            width: ['100%', null, null, '96%']
            }}
          >{post.node.excerpt}</p>
          <div
          sx={{
            color: 'lightTxt',
            fontSize: 1,
            opacity: '.33',
          }}
          >
          {differenceInDays(new Date(post.node.publishedAt), new Date()), { useAdditionalDayOfYearTokens: true, useAdditionalWeekYearTokens: true } > 3
            ? distanceInWords(new Date(post.node.publishedAt), new Date(), { useAdditionalDayOfYearTokens: true, useAdditionalWeekYearTokens: true } )
            : format(new Date(post.node.publishedAt), 'MMMM dd, yyyy')}
          </div>
        </Grid>
      </Grid>
    ))}
    </Grid>
    </>
  )
}

export default RecentPostFeed;