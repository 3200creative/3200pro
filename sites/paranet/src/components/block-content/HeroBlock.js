/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState }  from "react";
import BlockContent from "./index";
import CTALink from 'c32-gatsby-theme-core'
import clientConfig from "../../../client-config";
import { getFluidGatsbyImage } from "gatsby-source-sanity";
import TextScramble from './textShuffleMaster'
import ShuffleText from './ShuffleText'

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
  console.log(props);
  const Style = props.textStyle ? props.textStyle: 'span'
  const ShuffleTextProps = props
  const [pause] = useState(false)  
  const img = maybeImage(props.illustration);
  return (
    <div sx={{width: '100%', mx: 'auto', display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center', variant: 'variants.heroBlock' }}>
      {/* Left col */}
      <div sx={{display: 'flex', w2idth: '100%', flexDirection: 'column', justify:'center', alignItems: 'flex-start', textAlign: 'center' }}>
      {/* <div sx={{background: '#f9f9f9', height: '1500px', width: '1000px', position: 'absolute', transform: 'rotate(20deg)', right: '-50%', top: '-40%'}}></div> */}
        <div css={{index: '999',position:'relative'}}>
        <h1 className="my-4 text-5xl font-bold leading-tight">{props.heading}</h1>
        <BlockContent blocks={props.tagline} />
        <div className="leading-normal text-2xl mb-8">
        </div>
        {props.cta && props.cta.title && (
          <CTALink {...props.navItem}/>
        )}
      </div>
      {/* Right col */}
      {ShuffleTextProps ? <ShuffleText heroProps={ShuffleTextProps}/>: null}
        </div>
      <div sx={{height: '1000px', width: '1000px', position: 'absolute', top: '0', left: '0' }}>{img}</div>
    </div>
  );
}

export default HeroBlock;
