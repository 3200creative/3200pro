
/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
// import { graphql } from "gatsby"
// import Img from "gatsby-image"
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from './block-content'
//import FeaturedImage from './FeaturedImage'
import PostContent from './singlePostContainer'
import Reviews from './reviews'
//import { format, distanceInWords, differenceInDays } from 'date-fns'
//import MailChimpForm from '../../src/components/MailChimpForm'


const FishingBoatTemplate = props => {
    const { data, errors } = props
    const page = data && data.page
    
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
            {/* <FeaturedImage
              showFeaturedImage={data.sanityGlobalOptions.musicFeaturedImageHero}
              featuredImage={page.featuredImage}
            /> */}
        {page._rawBlockContent && <BlockContent blocks={page._rawBlockContent} />}
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