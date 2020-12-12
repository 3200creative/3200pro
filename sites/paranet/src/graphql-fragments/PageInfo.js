import { graphql } from "gatsby";

export const PostInfo = graphql`
  fragment PageInfo on SanityLandingPage {
    id
    seo {
      metaDesc
      metaTitle
    }
    navMenu {
      ...navMenu
    }
    _rawContent(resolveReferences: { maxDepth: 10 })
    title
  }
`;
