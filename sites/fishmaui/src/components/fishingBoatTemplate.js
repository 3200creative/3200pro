
/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Img from "gatsby-image"
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from './block-content'
import PostContent from './singlePostContainer'
import Reviews from './reviews'
import clientConfig from '../../client-config'
import { getFluidGatsbyImage } from "gatsby-source-sanity"

const FishingBoatTemplate = props => {
    const { data, errors } = props
    const page = data && data.page
    const image = page.featuredImage
    console.log(`Featured Image: ${image}`);
    return (
      <Layout>
        
        {errors && <SEO title='GraphQL Error' />}
        {page && <SEO title={page.title} />}
        <Container>
            {errors && (
                <GraphQLErrorList errors={errors} />
            )}
        </Container>
        <PostContent>
        {image && (<div sx={{width: ['100%', null, 'auto', null],margin: ['0 auto', null, 'none', null ],paddingRight: ['0px', '10px', null, null],float: ['none','left', null, null], maxWidth: '100%', width: '500px'}}><Img
            fluid={getFluidGatsbyImage(image,{ maxWidth: 800 }, {...clientConfig.sanity})}
            alt={image.alt} 
          /></div>)}
        <div>
        <header
          sx = {{
            variant: 'variants.postContainer.header'
          }}
        >
          {page && <Styled.h1>{page.title}</Styled.h1>}
          {/* <div sx={{variant: 'variants.postContainer.header.postMeta'}}
          >
          {differenceInDays(new Date(page.publishedAt), new Date()), { useAdditionalDayOfYearTokens: true, useAdditionalWeekYearTokens: true } > 3
            ? distanceInWords(new Date(page.publishedAt), new Date())
            : format(new Date(page.publishedAt), 'MMMM dd, yyyy')}
          </div> */}
         </header>
        {page._rawBlockContent && <BlockContent blocks={page._rawBlockContent} />}
        </div>
        <Reviews filterReviews={page.title}/>
        </PostContent>
        </Layout>
  )
}

export default FishingBoatTemplate

export const query = graphql`
  query BoatPageQuery($id: String!) {    
    page: sanityBoat(id: { eq: $id }) {
        id
        title
        featuredImage {
            asset {
              _id
            }
            alt
        }
        slug {
            current
        }
        _rawBlockContent(resolveReferences: {maxDepth: 20})
    }
    reviews: allSanityReview {
      edges {
        node {
          id
          boatReviewed {
            title
          }
          _rawBlockContent
          _rawAdminResponse
          title
          reviewerName
          rating
        }
      }
    }
  }
`