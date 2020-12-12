import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import serializers from './serializers'

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />

export default BlockContent