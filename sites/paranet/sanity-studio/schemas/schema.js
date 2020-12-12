// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
// Utilities
import menu from './utilities/menu'
import globalOptions from './utilities/globalOptions'
import siteSettings from './utilities/siteSettings'
import route from './utilities/route'
// Taxonomies
import teamPosition from './taxonomies/teamPosition'
import serviceType from './taxonomies/serviceType'
// Object Types:
import blockContent from './objects/blockContent'
import figure from './objects/figure'
import tags from './objects/tags'
import meta from './objects/meta'
import featuredImage from './objects/featuredImage'
import simpleUrl from './objects/url'
import excerptPortableText from './objects/excerptPortableText'
import button from './objects/button'
import subBtn from './objects/subBtn'
import buttonBlock from './objects/buttonBlock'
import modularContent from './objects/modularContent'
import openGraph from './objects/openGraph'
import spacer from './objects/spacers'
import cta from './objects/cta'
// Content
import review from './contentTypes/review'
import service from './contentTypes/service'
import teamMember from './contentTypes/bio'
import post from './contentTypes/post'
import page from './contentTypes/page'
import landingPage from './contentTypes/landingPage'
import location from './contentTypes/location'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'fishmaui.com',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
        // Taxonomies
        teamPosition,
        serviceType,
        // Utilities
        menu,
        globalOptions,
        siteSettings,
        route,
        // Object Types
        blockContent,
        openGraph,
        modularContent,
        figure,
        tags,
        meta,
        cta,
        featuredImage,
        simpleUrl,
        button,
        subBtn,
        buttonBlock,
        excerptPortableText,
        spacer,
        // Content Types
        page,
        service,
        post,
        teamMember,
        landingPage,
        review,
        location
  ])
})
