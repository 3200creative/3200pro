/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react";
import BlockContent from "./index";
import SanityRoutingNav from "c32-gatsby-theme-components/src/components/header/navbar/sanityRoutingNav"
import clientConfig from "../../../client-config";
import Grid from '@material-ui/core/Grid'
import { getFluidGatsbyImage } from "gatsby-source-sanity";
const featuredImage = illustration => {
  let img = null;
  if (illustration && illustration.image && illustration.image.asset && !illustration.disabled) {
    const fluidProps = getFluidGatsbyImage(
      illustration.image.asset._id,
      { maxWidth: 960 },
      clientConfig.sanity
    );

    img = (
      <img src={fluidProps.src} alt={illustration.image.alt} sx={{width: '100%'}}/>
    );
  }
  return img;
};

function HeroBlock(props) {
  // return(<div>{JSON.stringify(props)}</div>)
  const img = featuredImage(props.illustration);
  const menu = props.heroNavigation && (props.heroNavigation.items || [])
  return (
    <Grid container sx={{width: '100vw !important', position: 'relative', marginLeft: '-50vw', left: '50%', mb: 4}}>
    <Grid item sm={12} md={6}>{img}</Grid>
    <Grid item sm={12} md={6} sx={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center', p: 5, pt: [1, null, 3, 4], variant: 'variants.heroBlock' }}>     
        <h1>{props.heading}</h1>
        <BlockContent blocks={props.tagline} />
        {!!menu && <SanityRoutingNav navMenuItems={menu} /> }
    </Grid>
    </Grid>
  );
}

export default HeroBlock;
