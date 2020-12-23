/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from './block-content'
import FeaturedImage from './FeaturedImage'
import PostContent from './singlePostContainer'
import { format, distanceInWords, differenceInDays } from 'date-fns'
import MailChimpForm from './MailChimpForm'

const TeaPageTemplate = props => {
    const { data, errors } = props
    const page = data && data.page

    
    return (
      <Layout>
        <div
        sx = {{
          variant: 'variants.layouts.singlePages.tea'
        }}
        >
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
          <div sx={{variant: 'variants.postContainer.header.postMeta'}}
          >
          {differenceInDays(new Date(page.publishedAt), new Date()) > 3
            ? distanceInWords(new Date(page.publishedAt), new Date())
            : format(new Date(page.publishedAt), 'MMMM DD, YYYY')}
          </div>
         </header>
            <FeaturedImage
            showFeaturedImage={data.sanityGlobalOptions.teaFeaturedImageHero}
            featuredImage={page.featuredImage}
            />
        {page._rawBlockContent && <BlockContent blocks={page._rawBlockContent} />}
        </PostContent>
        </div>
        <MailChimpForm />
        </Layout>
  )
}

export default TeaPageTemplate

export const query = graphql`
  query TeaPageQuery($id: String!) {    
    page: sanityTea(id: { eq: $id }) {
        id
        title
        slug {
            current
        }
        publishedAt
        featuredImage {
            asset {
              _id
            }
            alt
        }
        _rawBlockContent(resolveReferences: {maxDepth: 20})
  }
  sanityGlobalOptions{
      musicFeaturedImageHero
      lifeFeaturedImageHero
      businessFeaturedImageHero
      teaFeaturedImageHero
  }
  }
`