/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react";
import BlockContent from "./index";
import CTALink from 'c32-gatsby-theme-core'
import clientConfig from "../../../client-config";

import { getFluidGatsbyImage } from "gatsby-source-sanity";
const maybeImage = illustration => {
  let img = null;
  if (illustration && illustration.image && illustration.image.asset && !illustration.disabled) {
    const fluidProps = getFluidGatsbyImage(
      illustration.image.asset._id,
      { maxWidth: 960 },
      clientConfig.sanity
    );

    img = (
      <img className="w-full md:w-4/5 z-50" src={fluidProps.src} alt={illustration.image.alt} />
    );
  }
  return img;
};

function HeroBlock(props) {
  const img = maybeImage(props.illustration);
  return (
    <div sx={{background: 'pink', width: '100%', mx: 'auto', display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center', variant: 'variants.heroBlock' }}>
      {/* Left col */}
      <div sx={{display: 'flex', width: '100%', flexDirection: 'column', justify:'center', alignItems: 'flex-start', textAlign: 'center' }}>
        <p sx={{width: '100%', textTransform: 'uppercase', letterSpacing: '0em'}}>{props.label}</p>
        <h1 className="my-4 text-5xl font-bold leading-tight">{props.heading}</h1>
        <div className="leading-normal text-2xl mb-8">
          <BlockContent blocks={props.tagline} />
        </div>
        {props.cta && props.cta.title && (
          <CTALink
            {...props.cta}
            buttonActionClass="mx-auto ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
          />
        )}
      </div>
      {/* Right col */}
      <div className="w-full md:w-3/5 py-6 text-center">{img}</div>
    </div>
  );
}

export default HeroBlock;
