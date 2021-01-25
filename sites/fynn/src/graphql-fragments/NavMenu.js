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
        items {
          ... on SanityNavItem {
          title
          route
          link
          kind
          relativeNavItem
          }
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
