// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
// Utilities
import menu from './utilities/menu'
import globalOptions from './utilities/globalOptions'
import siteSettings from './utilities/siteSettings'
import route from './utilities/route'
import navItem from './utilities/navItem'
import newsletterSignup from './utilities/newsletterSignup'
import newsletterInContent from './utilities/newsletterInContent'
// Taxonomies
import category from './taxonomies/category'
import productCategory from './taxonomies/productCategory'


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
import link from './objects/link'
import buttonBlock from './objects/buttonBlock'
import modularTextBlock from './objects/modularTextBlock'
import openGraph from './objects/openGraph'
import spacer from './objects/spacers'
import heroBlock from './objects/heroBlock'
import simpleBlockContent from './objects/simpleBlockContent'
import illustration from './objects/illustration'
import videoEmbed from './objects/videoEmbed'
import recentPostFeed from './objects/recentPostFeed'
import html from './objects/html'
import recentProductFeed from './objects/recentProductFeed'
import randomPostList from './objects/randomPostList'
import randomProductList from './objects/randomProductList'
// Content
import post from './contentTypes/post'
import page from './contentTypes/page'
import landingPage from './contentTypes/landingPage'
import product from './contentTypes/product'
import vendor from './contentTypes/vendor'
import affiliate from './contentTypes/affiliate'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'paranet.com',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
        // Taxonomies
        category,
        productCategory,
        // Utilities
        menu,
        globalOptions,
        siteSettings,
        route,
        navItem,
        newsletterSignup,,
        newsletterInContent,
        // Object Types
        blockContent,
        link,
        openGraph,
        modularTextBlock,
        figure,
        tags,
        meta,
        featuredImage,
        simpleUrl,
        button,
        subBtn,
        recentPostFeed,
        recentProductFeed,
        buttonBlock,
        excerptPortableText,
        spacer,
        heroBlock,
        simpleBlockContent,
        illustration,
        videoEmbed,
        html,
        randomPostList,
        randomProductList,
        // Content Types
        page,
        post,
        landingPage,
        product,
        affiliate,
        vendor
  ])
})
