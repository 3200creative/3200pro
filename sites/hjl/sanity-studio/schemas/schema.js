// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Utilities
import menu from './utilities/menu'
// Object Types:
import blockContent from './objects/blockContent'
import script from './objects/script'
import figure from './objects/figure'
import figureWide from './objects/figureWide'
import meta from './objects/meta'
import featuredImage from './objects/featuredImage'
import quoteBlock from './objects/quoteBlock'
import simpleUrl from './objects/url'
import gallery from './objects/gallery'
import button from './objects/button'
import subBtn from './objects/subBtn'
import buttonBlock from './objects/buttonBlock'
import imgLeftTxtRight from './objects/imgLeftTxtRight'
import excerptPortableText from './objects/excerptPortableText'
import bioPortableText from './objects/bioPortableText'
import spacer from './objects/spacers'
import darkmodeImage from './objects/darkmodeImage'
import shuffleTextBlock from './objects/textShuffler/shuffleTextBlock'
import shuffledTextSection from './objects/textShuffler/shuffledTextSection'
import shuffledText from './objects/textShuffler/shuffledText'
import standardText from './objects/textShuffler/standardText'
import blockTitleTxtButtonBg from './objects/blockTitleTxtButtonBg'
import simplePortableText from './objects/simplePortableText'
// Content Types:
import page from   './contentTypes/page'
import testimonial from './contentTypes/testimonial'
import landingPage from './contentTypes/landingPage'
import faq from './contentTypes/faq'
import post from './contentTypes/post'
// Taxonomies
import category from './taxonomies/category'
import tags from './taxonomies/tags'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'livegard',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Utilities
    menu,
    // Object Types
    blockContent,
    script,
    figure,
    figureWide,
    meta,
    featuredImage,
    quoteBlock,
    simpleUrl,
    gallery,
    button,
    subBtn,
    buttonBlock,
    imgLeftTxtRight,
    excerptPortableText,
    bioPortableText,
    spacer,
    darkmodeImage,
    shuffleTextBlock,
    shuffledTextSection,
    shuffledText,
    standardText,
    blockTitleTxtButtonBg,
    simplePortableText,
    // Content Types
    page,
    post,
    testimonial,
    landingPage,
    faq,
    // Taxonomies
    category,
    tags
  ])
})


