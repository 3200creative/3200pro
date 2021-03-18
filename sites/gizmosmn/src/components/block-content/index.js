/** @jsx jsx */
import { jsx } from "theme-ui"
import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import Figure from './Figure'
import Spacer from './Spacer'
import Gallery from './Gallery'
import ButtonBlock from './ButtonBlock'
import ImageCardBlock from './ImageCardBlock'
const serializers = {
  types: {
    block (props) {
      switch (props.node.style) {
        case 'h1':
          return <h1>{props.children}</h1>

        case 'h2':
          return <h2>{props.children}</h2>

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
    figureWide (props) {
      return <Figure {...props.node} />
    },
    gallery (props) {
      return <Gallery {...props.node} />
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
    buttonBlock (props) {
      return <ButtonBlock {...props.node} />
    },
    imageCardBlock (props) {
      return <ImageCardBlock {...props.node} />
    },
    
  }
}

const BlockContent = ({ blocks, colorBG }) => 
<div sx={{
        
        variant: 'variants.primaryContent',
        backgroundColor: colorBG ? colorBG : null,
        }}><BaseBlockContent blocks={blocks} serializers={serializers} /></div>

export default BlockContent