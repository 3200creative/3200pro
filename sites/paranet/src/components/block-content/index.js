import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import Figure from './Figure'
import Spacer from './Spacer'
import ButtonBlock from './ButtonBlock'
import SanityScript from './Script'
import ImgLeftTxtRight from './ImgLeftTxtRight'
import DarkmodeImage from './DarkmodeImage'
import Gallery from './Gallery'
import Highlight from './Highlight'
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
        
        case 'highlight':
          return <span className='highlight'>{props.children}</span>

        default:
          return <p>{props.children}</p>
      }
    },
    figure (props) {
      return <Figure {...props.node} />
    },
    highlight (props) {
      return <Highlight {...props.node} />
    },
    clear (props) {
      return <Spacer {...props.node} />
    },
    spacer (props) {
      return <Spacer {...props.node} />
    },
    buttonBlock (props) {
      return <ButtonBlock {...props.node} />
    },
    gallery (props) {
      return <Gallery {...props.node} />
    },
    imgLeftTxtRight (props) {
      return <ImgLeftTxtRight {...props.node} />
    },
    script (props) {
      return <SanityScript {...props.node} />
    },
    darkmodeImage (props) {
      return <DarkmodeImage {...props.node} />
    }
  },
  marks: {
    highlight (props) {
      return <span className='highlight' >{props.children}</span>
    }
  }
}

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />

export default BlockContent