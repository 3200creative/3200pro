/** @jsx jsx */
import BaseBlockContent from '@sanity/block-content-to-react'
import { jsx, Styled } from "theme-ui"
import React from 'react'
import clientConfig from '../../../client-config'

import { Link } from 'gatsby'
import { Grid } from 'theme-ui'
import { Box } from 'theme-ui'
import { buildImageObjMap } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'

function ImageCardBlock (props) {
    console.log(props);
  return (
    <>
        {/* {props.imageCards && props.imageCards.map(card =>(
            <Grid
            width={[ '100%', '30%' ]}
            gap={3}
            columns={[ 1, 2]}
            sx={{
              marginTop: '40px'
            }}
            >
            <div>
            <img
            src={imageUrlFor(buildImageObjMap(card.blockImage))
            .auto('format')
            .url()
            }
            alt='test'
            sx= {{
              width: '96%',
              maxHeight: [null, null, null, '285px'],
              variant: 'variants.shadow',
            }}
            />
            </div>
            <div><h4
            sx= {{
                    m: 0,
                    color: 'text',
                    fontFamily:  'header',
                    width: ['100%', null, null, '92%']
                }}
            >{card.title}</h4>
            <p>
            <BaseBlockContent blocks={card.text} {...clientConfig.sanity}  />
            </p>
            {props.buttons. && props.buttons.map(buttons =>(
                <div>
                    text:{buttons.buttonTxt}
                </div>
            ))}
            </div>
            </Grid>
        ))} */}
    </>
  )
}

export default ImageCardBlock
