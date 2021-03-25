import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import clientConfig from "../../../client-config";
import serializers from './serializers'

const BlockContent = ({ blocks }) => <div sx={{variant: 'variants.content'}}><BaseBlockContent blocks={blocks} serializers={serializers} {...clientConfig.sanity}  /></div>

export default BlockContent