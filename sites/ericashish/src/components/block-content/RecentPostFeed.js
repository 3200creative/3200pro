/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'
import Img from "gatsby-image"
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from "gatsby"
import { Grid } from 'theme-ui'
import { Box } from 'theme-ui'
import {mapEdgesToNodes, filterOutDocsWithoutSlugs} from '../../lib/helpers'
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import Masonry from 'react-masonry-component';


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
      tea: allSanityLife(
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

  console.log('this is the content type');
  console.log(contentType);
  console.log('Content Type Length:');
  console.log(musicPosts.length);
  console.log('Max Count:');
  console.log(maxCount);
  
  return (
    <Masonry
      className={'my-gallery-class'} // default ''
      elementType={'div'} // default 'div'
      disableImagesLoaded={false} // default false
      updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
    >

    {contentType.slice(0, Math.min(100, maxCount)).map(post => (
      <Grid key={post.node.key}
      gap={5}
      columns={[2, '1fr 2fr']}
      sx= {{
        my: 4
       }}
      >
      <Box sx= {{
        height: '225px',
        width: '560px',
        overflow: 'hidden',
        variant: 'variants.shadow',
      }}>
        <Link to={base + '/' + post.node.slug.current}>
        <div
        sx= {{
          position: 'relative',
          top: '-50%',
        }}
        >
          <Img fluid={post.node.featuredImage.asset.fluid} alt="Test"/>
        </div>
        </Link>
      </Box>
      <Box>
        <h4 sx= {{
          m: 0,
          fontFamily:  'header',
        }}><Link to={base + '/' + post.node.slug.current}>{post.node.title}</Link></h4>
        <p sx= {{
          py: 0,
          fontSize: 1,
          color: 'grayTxt',
          }}
        >{post.node.excerpt}</p>
      </Box>
      </Grid>
    ))}
    </Masonry>
  )
}

export default RecentPostFeed;