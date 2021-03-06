import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import clientConfig from '../../../client-config'
import serializers from './serializers'

const ModularTextBlock = ({ blocks }) => (
  <BaseBlockContent
    blocks={blocks}
    serializers={serializers}
    {...clientConfig.sanity}
  />
)

export default ModularTextBlock
