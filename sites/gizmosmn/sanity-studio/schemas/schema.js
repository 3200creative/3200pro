// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Object Types:
import blockContent from './objects/blockContent'
import figure from './objects/figure'
import figureWide from './objects/figureWide'
import tags from './objects/tags'
import meta from './objects/meta'
import featuredImage from './objects/featuredImage'
import quoteBlock from './objects/quoteBlock'
import simpleUrl from './objects/url'
import siteSettings from './contentTypes/siteSettings'
import companyInformation from './contentTypes/companyInformation'
import gallery from './objects/gallery'
import button from './objects/button'
import buttonBlock from './objects/buttonBlock'
import video from './objects/video'
import imageCardBlock from './objects/imageCardBlock'

// Content Types:
import page from './contentTypes/page'
import post from './contentTypes/post'
import homepage from './contentTypes/homepage'
import aboutPage from './contentTypes/aboutPage'
import galleryPage from './contentTypes/galleryPage'
import galleryArchive from './contentTypes/galleryArchive'
import contactPage from './contentTypes/contactPage'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({ 
  // We name our schema
  name: 'ericashish.com',

  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
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
    buttonBlock,
    video,
    imageCardBlock,
    // Content Types
    siteSettings,
    companyInformation,
    homepage,
    page,
    post,
    galleryPage,
    galleryArchive,
    aboutPage,
    contactPage,
  ])
})
