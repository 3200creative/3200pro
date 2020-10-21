/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql, useStaticQuery } from 'gatsby'
import { Layout } from "c32-gatsby-theme-core"
import BlockContent from './block-content'
import StarRating from './star-rating'
export default function Reviews(props) {
  const ReviewQuery = useStaticQuery(graphql`
    query Reviews {    
      review: allSanityReview {
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
  `)
  const review = ReviewQuery && ReviewQuery.review
  return (
      <div sx={{variant: 'reviews.container'}}>
        <h2>{props.filterReviews} Reviews:</h2>
      { review ? review.edges.map(edge => (
          <div>
          {edge.node.boatReviewed.title === props.filterReviews ?
          (
            <div sx= {{variant: 'reviews.singleReview'}}>
            <div sx= {{ variant: 'reviews.singleReview.titleBlock'}}>
              <StarRating starRating={edge.node.rating} />
              <div><h4 sx= {{variant: 'reviews.singleReview.title'}}>{edge.node.title}</h4></div>
            </div>
            <div sx= {{variant: 'reviews.singleReview.meta'}}>
              <div>Boat: {edge.node.boatReviewed.title}</div>
              <div>Trip Type: {edge.node.boatReviewed.title}</div>
              <div>Reviewed By: {edge.node.reviewerName}</div>
            </div>
            <div>{edge.node._rawBlockContent && <BlockContent blocks={edge.node._rawBlockContent} />}</div>
            </div>
          ) : null }
          </div>
        )) : 'no reviews'}
      </div>
  )
}
