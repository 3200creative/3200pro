/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from "react";
import { graphql } from "gatsby";
import { SEO } from "c32-gatsby-theme-core"
import  Layout  from "c32-gatsby-theme-core/src/components/layoutV2"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
// Modular Blocks
import ModularTextBlock from '../components/block-content/ModularTextBlock'
import ButtonBlock from "../components/block-content/ButtonBlock";
import HeroBlock from "../components/block-content/HeroBlock";
import RecentPostFeed from "../components/block-content/RecentPostFeed"
import RecentProductFeed from "../components/block-content/RecentProductFeed"
import Spacer from "../components/block-content/Spacer"
import AmazonRelatedProducts from 'c32-gatsby-theme-components/src/components/affiliate/amazonRelatedProduct'
import MailChimpForm from '../components/MailChimpForm'
import Html from '../components/block-content/Html'
export const query = graphql`
  query PageTemplateQuery($id: String!) {
    route: sanityRoute(id: { eq: $id }) {
      slug {
        current
      }
      useSiteTitle
      landingPage {
        ...LandingPageInfo
      }
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
const LandingPage = (props) => {
  const { data, errors } = props;
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }
  const site = (data || {}).site;
  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }
  const page = data.landingPage || data.route.landingPage;

  const content = (page._rawContent || [])
  .filter((c) => !c.disabled)
  .map((c, i) => {
    let el = null;
    switch (c._type) {
      case "modularTextBlock":
        el = <ModularTextBlock key={c._key} {...c} blocks={c.text}/>;
        break;
      case "buttonBlock":
        el = <ButtonBlock key={c._key} {...c} />;
        break;
      case "heroBlock":
        el = <HeroBlock key={c._key} {...c} />;
        break;
      case "recentPostFeed":
        el = <RecentPostFeed key={c._key} {...c} />;
        break;
      case "recentProductFeed":
        el = <RecentProductFeed key={c._key} {...c} />;
        break;
      case "spacer":
        el = <Spacer key={c._key} {...c} />;
        break;
        case "html":
          el = <Html key={c._key} {...c} />;
          break;
      default:
        el = null;
    }
    return el;
  });



  const menuItems = page.navMenu && (page.navMenu.items || []);
  const pageTitle = data.route && !data.route.useSiteTitle && page.title;
  return (
    <Layout navMenuItems={menuItems}>
      <SEO 
       title={page.seo.metaTitle && page.seo.metaTitle} 
       description={page.seo.metaDesc && page.seo.metaDesc} 
       />
      <div sx={{pt:22}}>{content}</div>
      <AmazonRelatedProducts />
      <MailChimpForm />
    </Layout>
  );
};
export default LandingPage;