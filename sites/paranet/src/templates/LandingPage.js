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
import BlockTitleTxtButtonBg from "../components/block-content/BlockTitleTxtButtonBg"
import ShuffleText from "../components/block-content/ShuffleText"
import { useSiteMetadata } from "c32-gatsby-theme-core"

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
  const { useSanityRoutingNav, useSanityRoutingContactNav, globalContactMenu, useDarkMode} = useSiteMetadata()
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
  console.log();
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
      case "blockTitleTxtButtonBg":
        el = <BlockTitleTxtButtonBg key={c._key} {...c} />;
        break;
      case "shuffledText":
      el = <ShuffleText key={c._key} {...c} />;
      break;
      default:
        el = null;
    }
    return el;
  });

  const menuItems = page.navMenu && (page.navMenu.items || []);
  const contactMenu = globalContactMenu;
  const pageTitle = data.route && !data.route.useSiteTitle && page.title;

  return (
    <Layout navMenuItems={menuItems}  contactMenuItems={contactMenu} textWhite={true}>
      <SEO 
       title={page.seo.metaTitle && page.seo.metaTitle} 
       description={page.seo.metaDesc && page.seo.metaDesc} 
       />
      <div sx={{py:22, px:[4,6,100]}}>{content}</div>
    </Layout>
  );
};

export default LandingPage;
