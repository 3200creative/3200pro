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
import LandingPage from "../../src/templates/LandingPage"
import Errors from '../../src/components/errors'

export const query = graphql`
  fragment SanityImage on SanityFeaturedImage {
    alt
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
      metadata {
        lqip
        dimensions {
          aspectRatio
          width
          height
        }
      }
    }
  }

  query FrontpageQuery {
    page: sanityLandingPage(_id: { regex: "/(drafts.|)homepage/" }) {
      ...PageInfo
    }

    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      openGraph {
        title
        description
        image {
          ...SanityImage
        }
      }
    }
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return <Errors errors={errors} />;
  }

  return <LandingPage data={data} />;
};

export default IndexPage