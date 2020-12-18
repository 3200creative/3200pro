/** @jsx jsx */
import BaseBlockContent from '@sanity/block-content-to-react'
import { jsx, Styled } from "theme-ui"
import React from 'react'
import clientConfig from '../../../client-config'

import { Link } from 'gatsby'
import { GridLayoutContext } from '../articleFeedLayout'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

import { buildImageObjMap } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import ButtonBlock  from './ButtonBlock'
function ImageCardBlock (props) {
    console.log(props);
  return (
    <Grid container justify="space-between" spacing= {5} sx={{mt:'20px!important', width: '100%'}}>
        {props.imageCards && props.imageCards.map(card => (
            <>
            <Grid  container xs={12}  md={card.cardlayout === 'card' ? 6 : 12} sx={{my: card.verticalSpace ? card.verticalSpace : 4}}>
            <Grid item xs={12} md={card.cardlayout === 'card' ? 12 : 6}>
            <img
            src={imageUrlFor(buildImageObjMap(card.blockImage))
            .auto('format')
            .url()
            }
            alt='test'
            sx= {{
              width: '96%',
              maxHeight: [null, null, null, '340px'],
              variant: 'variants.shadow',
            }}
            />
            </Grid>
            <Grid item xs={12} md={card.cardlayout === 'card' ? 12 : 6} sx={{align:"flex-start !important", flexDirection:"row !important"}} >
            <Typography>
              <h4
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
            {card.cardButtons && <ButtonBlock parentProps={card.cardButtons} />}
            </Typography>
            </Grid>
            </Grid>
            </>
        ))}
    </Grid>
  )
}

export default ImageCardBlock
