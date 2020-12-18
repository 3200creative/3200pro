import { graphql } from "gatsby";

export const PostInfo = graphql`
  fragment LandingPageInfo on SanityLandingPage {
    id
    seo {
      metaDesc
      metaTitle
    }
    navMenu {
      ...navMenu
    }
    _rawContent(resolveReferences: { maxDepth: 40 })
    title
  }
`;
