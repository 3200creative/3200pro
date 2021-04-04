/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { graphql } from 'gatsby'
import { format, distanceInWords, differenceInDays } from 'date-fns'
import { SEO, Layout, SingleLayout } from 'c32-gatsby-theme-core'

import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import BlockContent from './block-content'
import GridLayoutProvider from './articleFeedLayout'
import PostContent from './singlePostContainer'
import FeaturedImage from './FeaturedImage'
import MailChimpForm from './MailChimpForm'

const MusicPageTemplate = (props) => {
  const { data, errors } = props
  const page = data && data.page
  const showFeaturedImage = data.sanityGlobalOptions.musicFeaturedImageHero
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {page && (
        <SEO
          socialImage={page.featuredImage?.asset._id}
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
          <Styled.h1>{page.title}</Styled.h1>
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
          showFeaturedImage={showFeaturedImage}
          featuredImage={page.featuredImage}
        />
        {page._rawBlockContent && (
          <BlockContent blocks={page._rawBlockContent} />
        )}
      </PostContent>
      <MailChimpForm />
    </Layout>
  )
}

export default MusicPageTemplate

export const query = graphql`
  query MusicPageQuery($id: String!) {
    page: sanityMusic(id: { eq: $id }) {
      id
      title
      slug {
        current
      }
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
