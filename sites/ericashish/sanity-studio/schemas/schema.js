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
import video from './objects/video'
import podcast from './objects/podcast'
import simpleUrl from './objects/url'
import featuredPodcastImages from './objects/featuredPodcastImages'
import siteSettings from './contentTypes/siteSettings'
import newsletterSignup from './contentTypes/newsletterSignup'
import menuLink from './objects/menuLink'
import subMenu from './objects/subMenu'
import gallery from './objects/gallery'
import soundcloud from './objects/soundcloud'
import soundcloudPlaylistDropdown from './objects/soundcloudPlaylistDropdown'
import soundcloudPlaylist from './objects/soundcloudPlaylist'
import recentPostFeed from './objects/recentPostFeed'
import bioPortableText from './objects/bioPortableText'
import singularFeaturedPost from './objects/singularFeaturedPost'
import quote from './objects/quote'
import featuredAuthorBlock from './objects/featuredAuthorBlock.js'
// Content Types:
import event from './contentTypes/event'
import business from './contentTypes/business'
import life from './contentTypes/life'
import music from './contentTypes/music'
import tea from './contentTypes/tea'
import page from './contentTypes/page'
import author from './contentTypes/author'
import landingPage from './contentTypes/landingPage'
import globalOptions from './contentTypes/globalOptions'


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
    quote,
    featuredImage,
    video,
    simpleUrl,
    featuredPodcastImages,
    subMenu,
    menuLink,
    gallery,
    soundcloud,
    recentPostFeed,
    bioPortableText,
    singularFeaturedPost,
    featuredAuthorBlock,
    soundcloudPlaylist,
    soundcloudPlaylistDropdown,
    // Content Types
    siteSettings,
    newsletterSignup,
    event,
    business,
    life,
    music,
    tea,
    page,
    podcast,
    landingPage,
    author,
    globalOptions,
  ])
})
