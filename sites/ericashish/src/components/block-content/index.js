/** @jsx jsx */
import { jsx } from "theme-ui"
import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import clientConfig from '../../../client-config'
import Figure from './Figure'
import Spacer from './Spacer'
import Gallery from './Gallery'
import SanityVideo from './Video'
import SanitySoundcloud from './Soundcloud'
import SanitySoundcloudPlaylist from './SoundcloudPlaylist'
import ButtonBlock from './ButtonBlock'
import SanitySoundcloudPlaylistDropdown from './SoundcloudPlaylistDropdown'
import RecentPostFeed from './RecentPostFeed'
import SingularFeaturedPost from './SingularFeaturedPost'
import AuthorBlock from './AuthorBlock'
import Quote from './Quote'
import HTML from './html'
import ImageCardBlock from './imageCardBlock'
import SitewideRecentPosts from './SitewideRecentPosts'

const serializers = {  
  marks: {
    internalLink: ({mark: { reference } , children}) => {
      const {slug = {}} = reference
      const href = `https://www.ericashish.com/${reference._type}/${slug.current}`
      return <a href={href}>{children}</a>
    },
    link: ({mark, children}) => {
      const { blank, href } = mark
      return blank ?
        <a href={href} target="_blank" rel="noopener">{children}</a>
        : <a href={href}>{children}</a>
    },
    lightboxIframe: ({mark, children}) => {
      const { blank, href } = mark
      return <span>Video modal: {children}</span>
    },
  },
  types: {
    //singularFeaturedPost: SingularFeaturedPost,
    block (props) {
      switch (props.node.style) {
        case 'h1':
          return <h1>{props.children}</h1>

        case 'h2':
          return <h2>{props.children}</h2>

        case 'highlight':
          return <span class='highlight'>{props.children}</span>

        case 'h3':
          return <h3>{props.children}</h3>

        case 'h4':
          return <h4>{props.children}</h4>

        case 'blockquote':
          return <blockquote>{props.children}</blockquote>

        default:
          return <p>{props.children}</p>
      }
    },
    figure (props) {
      return <Figure {...props.node} />
    },
    imageCardBlock (props) {
      return <ImageCardBlock {...props.node} />
    },
    gallery (props) {
      return <Gallery {...props.node} />
    },
    video (props) {
      return <SanityVideo {...props.node} />
    },
    soundcloud (props) {
      return <SanitySoundcloud {...props.node} />
    },
    soundcloudPlaylist (props) {
      return <SanitySoundcloudPlaylist {...props.node} />
    },
    soundcloudPlaylistDropdown (props) {
      return <SanitySoundcloudPlaylistDropdown {...props.node} />
    },
    buttonBlock (props) {
      return <ButtonBlock {...props.node} />
    },
    clear (props) {
      return <Spacer {...props.node} />
    },
    clearline (props) {
      return <Spacer {...props.node} />
    },
    spacer (props) {
      return <Spacer {...props.node} />
    },
    quote (props) {
      return <Quote {...props.node} />
    },
    html (props) {
      return <HTML {...props.node} />
    },
    recentPostFeed (props) {
      return <RecentPostFeed {...props.node} />
    },
    singularFeaturedPost (props) {
      return <SingularFeaturedPost {...props.node} />
    },
    featuredAuthor (props) {
      return <AuthorBlock {...props.node} />
    },
    sitewideRecentPosts (props) {
      return <SitewideRecentPosts {...props.node} />
    }
  }
}

const BlockContent = ({ blocks }) => <div sx={{variant: 'variants.postContent'}}><BaseBlockContent blocks={blocks} serializers={serializers} {...clientConfig.sanity} /></div>

export default BlockContent