/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { SEO, Layout } from 'c32-gatsby-theme-core'
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import { format, distanceInWords, differenceInDays } from 'date-fns'
import BlockContent from './block-content'
import FeaturedImage from './FeaturedImage'
import PostContent from './singlePostContainer'
import MailChimpForm from './MailChimpForm'

const BusinessPageTemplate = (props) => {
  const { data, errors } = props
  const page = data && data.page

  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {page && (
        <SEO
          socialImage={page.featuredImage?.asset.url}
          title={page.seo?.metaTitle || page.title}
          description={page.seo?.metaDesc || page.excerpt}
        />
      )}
      <Container>{errors && <GraphQLErrorList errors={errors} />}</Container>
      <PostContent>
        <header
          sx={{
            variant: 'variants.postContainer.header',
          }}
        >
          {page && <Styled.h1>{page.title}</Styled.h1>}
          <div sx={{ variant: 'variants.postContainer.header.postMeta' }}>
            {
              (differenceInDays(new Date(page.publishedAt), new Date()),
              {
                useAdditionalDayOfYearTokens: true,
                useAdditionalWeekYearTokens: true,
              } > 3
                ? distanceInWords(new Date(page.publishedAt), new Date())
                : format(new Date(page.publishedAt), 'MMMM DD, YYYY'))
            }
          </div>
        </header>
        <FeaturedImage
          showFeaturedImage={data.sanityGlobalOptions.musicFeaturedImageHero}
          featuredImage={page.featuredImage}
        />
        {page._rawBlockContent && (
          <BlockContent blocks={page._rawBlockContent} />
        )}
      </PostContent>
    </Layout>
  )
}

export default BusinessPageTemplate

export const query = graphql`
  query BusinessPageQuery($id: String!) {
    page: sanityBusiness(id: { eq: $id }) {
      id
      title
      slug {
        current
      }
      seo {
        metaTitle
        metaDesc
      }
      excerpt
      publishedAt
      featuredImage {
        asset {
          _id
          url
        }
        alt
      }
      _rawBlockContent(resolveReferences: { maxDepth: 20 })
    }
    sanityGlobalOptions {
      musicFeaturedImageHero
      lifeFeaturedImageHero
      businessFeaturedImageHero
      teaFeaturedImageHero
    }
  }
`
