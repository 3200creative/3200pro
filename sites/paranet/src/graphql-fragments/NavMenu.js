import { graphql } from "gatsby";

export const NavMenu = graphql`
  fragment navMenu on SanityMenu {
    items {
      title
      kind
      link
      route
      relativeNavItem
      subnav {
        ... on SanityMenu {
          title
        }
      }
      landingPageRoute {
        ... on SanityRoute {
          id
          _type
          slug {
            current
          }
        }
      }
    }
  }
`;
