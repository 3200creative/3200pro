import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import Figure from './Figure'
import Spacer from './Spacer'
import clientConfig from '../../../client-config'
import Gallery from './Gallery'
import ButtonBlock from './ButtonBlock'
import SanityScript from './Script'
import ImgLeftTxtRight from './ImgLeftTxtRight'
import DarkmodeImage from './DarkmodeImage'
import ShuffleText from './ShuffleText'
import BlockTitleTxtButtonBg from './BlockTitleTxtButtonBg'

const serializers = {
  types: {
    block(props) {
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
    figure(props) {
      return <Figure {...props.node} />
    },
    clear(props) {
      return <Spacer {...props.node} />
    },
    spacer(props) {
      return <Spacer {...props.node} />
    },
    buttonBlock(props) {
      return <ButtonBlock {...props.node} />
    },
    gallery(props) {
      return <Gallery {...props.node} />
    },
    imgLeftTxtRight(props) {
      return <ImgLeftTxtRight {...props.node} />
    },
    script(props) {
      return <SanityScript {...props.node} />
    },
    darkmodeImage(props) {
      return <DarkmodeImage {...props.node} />
    },
    shuffledTextSection(props) {
      return <ShuffleText {...props.node} />
    },
    blockTitleTxtButtonBg(props) {
      return <BlockTitleTxtButtonBg {...props.node} />
    },
  },
}

const BlockContent = ({ blocks }) => (
  <BaseBlockContent
    blocks={blocks}
    serializers={serializers}
    {...clientConfig.sanity}
  />
)

export default BlockContent
