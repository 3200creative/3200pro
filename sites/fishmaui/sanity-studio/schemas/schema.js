// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
// Utilities
import menu from './utilities/menu'
import globalOptions from './utilities/globalOptions'
import siteSettings from './utilities/siteSettings'
// Taxonomies
import boatType from './taxonomies/boatType'
// Object Types:
import blockContent from './objects/blockContent'
import script from './objects/script'
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
import spacer from './objects/spacers'
// Content
import page from   './contentTypes/page'
import landingPage from './contentTypes/landingPage'
import review from './contentTypes/review'
import faq from './contentTypes/faq'
import post from './contentTypes/post'
import boat from './contentTypes/boat'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'fishmaui.com',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
        // Taxonomies
        boatType,
        // Utilities
        menu,
        globalOptions,
        siteSettings,
        // Object Types
        blockContent,
        script,
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
        spacer,
        // Content Types
        page,
        landingPage,
        boat,
        post,
        review,
        faq

  ])
})