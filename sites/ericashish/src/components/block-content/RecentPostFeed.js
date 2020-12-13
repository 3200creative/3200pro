/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useContext} from 'react'
import { format, distanceInWords, differenceInDays } from 'date-fns'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from "gatsby"
import { buildImageObjMap } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import ArticleLayoutToggle  from '../ArticleLayoutToggle'
import { GridLayoutContext } from '../articleFeedLayout'
import Grid from '@material-ui/core/Grid'
import TxtColorChange from '../TxtColorChange'
function RecentPostFeed (props, location) {
  const data = useStaticQuery(graphql`
    query  {
      site {
        siteMetadata {
          siteUrl
        }
      }
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
      colors: sanityGlobalOptions {
      teaColor {
          hex
        }
        musicColor {
          hex
        }
        lifeColor {
          hex
        }
        businessColor {
          hex
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
  let color = null
  const businessPosts = data ? data.business.edges : null
  const lifePosts = data ? data.life.edges : null 
  const teaPosts = data ? data.tea.edges : null
  const musicPosts = data ? data.music.edges : null
  const colors = data && data.colors
  const count = props.postCount
  switch(contentType) {
    case 'business':
      contentType = businessPosts
      base = 'business'
      color = colors.businessColor.hex
      maxCount = contentType.length
      break
    case 'tea':
      contentType = teaPosts
      base = 'tea'
      color = colors.teaColor.hex
      maxCount = contentType.length
      break
    case 'music':
      contentType = musicPosts
      base = 'music'
      maxCount = contentType.length
      color = colors.musicColor.hex
      break
    case 'life':
      contentType = lifePosts
      base = 'life'
      maxCount = contentType.length
      color = colors.lifeColor.hex
      break
  }

  const { gridLayout = 'lists', hasSetGridLayout, setGridLayout, getGridLayout } = useContext(
    GridLayoutContext,
  );
  const url = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <>
    <Grid container justify="space-between" sx={{
      paddingTop: 4}}>
    <Grid item xs={8} md={10} sx={{
      display: [null, null, null,  gridLayout == 'lists' ? 'flex' : 'block'],
      flexDirection: [null, null, null, gridLayout == 'lists'? 'column' : 'none'],
      justifyContent: [null, null, null,  gridLayout == 'lists' ? 'center' : 'none'],
      }}>{props.link ? (
        <Link 
        sx= {{
          borderLeft: color ? `4px solid ${color}`  : '4px solid #000',
          color: color ? color : 'black',
          size: 'max-content',
          py: 2,
          px: 2,
        }}
        to={props.link}>{props.title}</Link>
      ) : null}</Grid><Grid item xs={4} md={2}><div sx={{display:['none',null,null,'block', null]}}>{props.showToggle ? (<ArticleLayoutToggle />) : null}</div></Grid>
    </Grid>
    <Grid container justify="space-between">
    {contentType.slice(0, Math.min(props.postCount ? props.postCount : 100, maxCount)).map(post => (
      <Grid container key={post.node.key} xs={12} md={gridLayout === 'lists' ? 12 : 6} sx={{
        py:4}}>
          
        <Grid item xs={12} md={gridLayout === 'lists' ? 6 : 12} sx={{height:gridLayout === 'lists' ? [null, null, null, '360px'] : [null, null, null, '360px'], }}>
          <Link to={url.indexOf(base) > -1 ? post.node.slug.current : base + '/' + post.node.slug.current}>
            <img
            src={imageUrlFor(buildImageObjMap(post.node.featuredImage))
            .auto('format')
            .url()
            }
            alt='test'
            sx= {{
              width: '96%',
              maxHeight: [null, null, null, '340px'],
              variant: 'variants.shadow',
            }}
            />
          </Link>
        </Grid>
        <Grid item xs={12} md={gridLayout === 'lists' ? 6 : 12} sx={{
          display: [null, null, null,  gridLayout === 'lists' ? 'flex' : 'block'],
          flexDirection: [null, null, null, gridLayout === 'lists' ? 'column' : 'none'],
          justifyContent: [null, null, null,  gridLayout === 'lists' ? 'center' : 'none'],
          height: '100%',
        }}  >
          <h4 sx= {{
            m: 0,
            color: 'text',
            fontFamily:  'header',
            width: ['100%', null, null, '92%']
          }}><Link to={url.indexOf(base) > -1 ? post.node.slug.current : base + '/' + post.node.slug.current}
            sx= {{
              color: 'text',
            }}
          >{post.node.title}</Link></h4>
          <p sx= {{
            py: 0,
            fontSize: 1,
            color: 'grayTxt',
            width: ['100%', null, null, '92%']
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
    {props.showArchiveBtn && <div sx={{float: 'right', width: 'auto'}}><Link to={`/${base}`}>view all {base} content</Link></div>}

    </>
  )
}

export default RecentPostFeed;