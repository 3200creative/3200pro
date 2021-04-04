/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from 'react'
import { format, distanceInWords, differenceInDays } from 'date-fns'
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
const sanityConfig = {projectId: 'tjb00633', dataset: 'production'}

const FeaturedImage = props => {
    const showFeaturedImage = props.showFeaturedImage
    const featuredImage = props.featuredImage
return (
<>
{showFeaturedImage != true && ' ' || (<Img
    fluid={getFluidGatsbyImage(featuredImage,{ maxWidth: 900 }, sanityConfig)}
    sx= {{
      width: '750px',
      maxWidth: '100%',
      margin: '0 auto 40px auto',
      variant: ['variants.featuredImage'],
    }} 
/>)}
</>
)
}

export default FeaturedImage