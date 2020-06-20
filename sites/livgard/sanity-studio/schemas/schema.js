// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Utilities
import menu from './utilities/menu'
// Object Types:
import blockContent from './objects/blockContent'
import figure from './objects/figure'
import figureWide from './objects/figureWide'
import tags from './objects/tags'
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
// Content Types:
import page from './contentTypes/page'
import teamMember from './contentTypes/teamMember'
import practiceArea from './contentTypes/legalService'
import testimonial from './contentTypes/testimonial'
import landingPage from './contentTypes/landingPage'


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
    figure,
    figureWide,
    tags,
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
    // Content Types
    page,
    teamMember,
    practiceArea,
    testimonial,
    landingPage,
  ])
})


