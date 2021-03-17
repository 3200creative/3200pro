import { graphql } from 'gatsby'

export const PostInfo = graphql`
  fragment PageInfo on SanityPage {
    id
    seo {
      seo_title
      meta_description
    }
    navMenu {
      ...navMenu
    }
    _rawBlockContent(resolveReferences: { maxDepth: 40 })
    _rawContent(resolveReferences: { maxDepth: 40 })
    title
  }
`
