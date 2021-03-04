/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import React, { useContext} from 'react'
import { format, distanceInWords, differenceInDays } from 'date-fns'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from "gatsby"
import { buildImageObjMap } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import ArticleLayoutToggle  from '../ArticleLayoutToggle'
import { GridLayoutContext } from '../articleFeedLayout'
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import Img from "gatsby-image"
import Grid from '@material-ui/core/Grid'
import TxtColorChange from '../TxtColorChange'
import clientConfig from '../../../client-config'

function SitewideRecentPosts (props) {
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
            _type
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
            _type
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
            _type
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
            _type
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
  
  let maxCount = null
  let color = null
  const businessPosts = data ? data.business.edges : null
  const lifePosts = data ? data.life.edges : null 
  const teaPosts = data ? data.tea.edges : null
  const musicPosts = data ? data.music.edges : null
  const colors = data && data.colors
  const count = props.postCount
  const { gridLayout = 'lists', hasSetGridLayout, setGridLayout, getGridLayout } = useContext(
    GridLayoutContext,
  );
  const allPosts = [...musicPosts, ...businessPosts, ...teaPosts, ...lifePosts].sort((oldest, newest)=>{
    return new Date(newest.node.publishedAt) - new Date(oldest.node.publishedAt); 
  });
  const url = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <div sx={{mb:5}}>
    <Grid container justify="space-between" sx={{
      paddingTop: 4}}>
    <Grid item xs={8} md={10} sx={{
      display: [null, null, null,  gridLayout == 'lists' ? 'flex' : 'block'],
      flexDirection: [null, null, null, gridLayout == 'lists'? 'column' : 'none'],
      justifyContent: [null, null, null,  gridLayout == 'lists' ? 'center' : 'none'],
      
      }}><Link 
        sx= {{
          borderLeft: color ? `4px solid ${color}`  : '4px solid #000',
          color: color ? color : 'black',
          size: 'max-content',
          py: 2,
          px: 2,
        }}
        to={props.link}>Recent Posts</Link></Grid>
    </Grid>
    <Grid container justify="space-between">
    {allPosts.slice(0, Math.min(props.count ? props.count : 100, 6)).map(post => {

        let contentType = post.node._type
        let base = contentType
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

    return(
      <Grid container key={post.node.key} xs={12} md={gridLayout === 'lists' ? 12 : 6} sx={{
        py:4, variant: 'variants.recentPosts'}}>
          
        <Grid item xs={12} md={gridLayout === 'lists' ? 6 : 12} sx={{height:gridLayout === 'lists' ? [null, null, null, '360px'] : [null, null, null, '360px']}}>
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
              marginBottom: 3,
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
            : format(new Date(post.node.publishedAt), 'MMMM DD, YYYY')}
          </div>
        </Grid>
      </Grid>
    )})}
    </Grid>
    </div>
  )
//   return (
//     <div sx={{mb:5}}>
//     {/* {JSON.stringify(allPosts)} */}
//     {allPosts.slice(0, Math.min(props.count ? props.count : 100, 6)).map(post => (
//         <Grid
//         gap={5}
//         columns={[2, '1fr 2fr']}>
//           <Box>
//             <Link to={post.node.slug.current}><Img fluid={getFluidGatsbyImage(post.node.postImage,{ maxWidth: 800 }, {...clientConfig.sanity})} alt="Test"/></Link>
//           </Box>
//           <Box>
//             <Link to={post.node.categoryURL}>{post.node.postType}</Link>
//             <Link to={post.node.slug.current}>
//               <h1>{post.node.title}</h1>
//               <p>{post.node.excerpt}</p>
//               </Link>
//           </Box>
//         </Grid>    
//     ))}

//     </div>
//   )
}

export default SitewideRecentPosts;