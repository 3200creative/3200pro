import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Tailwind
import stats from 'tailwindcss-components/src/studio/schema/stats'
import titleSubTitle from 'tailwindcss-components/src/studio/schema/anonymousObjects/titleSubTitle'
import titleSubTitleIcon from 'tailwindcss-components/src/studio/schema/anonymousObjects/titleSubTitleIcon'
import heroIcon from 'tailwindcss-components/src/studio/schema/anonymousObjects/heroIcon'
import splitContentWithImage from 'tailwindcss-components/src/studio/schema/heroes/split-content-with-image'
import button from 'tailwindcss-components/src/studio/schema/objects/button'
import buttonBlock from 'tailwindcss-components/src/studio/schema/objects/buttonBlock'
import ctaSimple from 'tailwindcss-components/src/studio/schema/ctaSections/ctaSimple'
// Utilities
import menu from './utilities/menu'
import globalOptions from './utilities/globalOptions'
import siteSettings from './utilities/siteSettings'
import route from './utilities/route'
import navItem from './utilities/navItem'
import footer from './utilities/footer/footer'
import footerSection from './utilities/footer/footerSection'
// Object Types:
import blockContent from './objects/blockContent'
import figure from './objects/figure'
import tags from './objects/tags'
import featuredImage from './objects/featuredImage'
import simpleUrl from './objects/url'
import excerptPortableText from './objects/excerptPortableText'
import subBtn from './objects/subBtn'
import link from './objects/link'
import modularTextBlock from './objects/modularTextBlock'
import openGraph from './objects/openGraph'
import spacer from './objects/spacers'
import simpleBlockContent from './objects/simpleBlockContent'
import blockTitleTxtButtonBg from './objects/blockTitleTxtButtonBg'
import simplePortableText from './objects/simplePortableText'
import jotform from './utilities/jotform'
// Content
import post from './contentTypes/post'
import page from './contentTypes/page'
// Anonymous

export default createSchema({
  name: 'tailwindKitchenSink',
  types: schemaTypes.concat([
    // Anonymous
    titleSubTitle,
    titleSubTitleIcon,
    heroIcon,
    // Tailwind
    stats,
    splitContentWithImage,
    button,
    buttonBlock,
    ctaSimple,
    // Utilities
    menu,
    globalOptions,
    siteSettings,
    route,
    navItem,
    footer,
    footerSection,
    jotform,
    // Object Types
    blockContent,
    link,
    openGraph,
    modularTextBlock,
    figure,
    tags,
    featuredImage,
    simpleUrl,
    subBtn,
    excerptPortableText,
    spacer,
    simpleBlockContent,
    blockTitleTxtButtonBg,
    simplePortableText,
    // Content Types
    page,
    post,
  ]),
})
