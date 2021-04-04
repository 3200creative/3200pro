/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useEffect, useContext } from 'react' // eslint-disable-line no-use-before-define
import TilesIcon from 'c32-gatsby-theme-components/src/components/icons/TilesIcon'
import RowsIcon from 'c32-gatsby-theme-components/src/components/icons/RowsIcon'
import { GridLayoutContext } from './articleFeedLayout'

function ArticleLayoutToggle(props) {
  const {
    gridLayout = 'lists',
    hasSetGridLayout,
    setGridLayout,
    getGridLayout,
  } = useContext(GridLayoutContext)
  const tilesIsActive = hasSetGridLayout && gridLayout === 'list'
  useEffect(() => getGridLayout(), [])

  return (
    <div sx={{ variant: 'variants.articleToggle' }}>
      <button
        onClick={() => setGridLayout('lists')}
        sx={{
          background: 'none',
          border: 'none',
          display: 'inline-block',
          variant: 'variants.archiveLayout',
        }}
        active={tilesIsActive}
        data-a11y="false"
        title="Show articles in List grid"
        aria-label="Show articles in List grid"
      >
        {(gridLayout === 'lists' && <RowsIcon fill="#333" />) || (
          <RowsIcon fill="#ddd" />
        )}
      </button>
      <button
        onClick={() => setGridLayout('grids')}
        sx={{
          background: 'none',
          border: 'none',
          display: 'inline-block',
          variant: 'variants.archiveLayout',
        }}
        active={!tilesIsActive}
        data-a11y="false"
        title="Show articles in Tile grid"
        aria-label="Show articles in Tile grid"
      >
        {(gridLayout === 'grids' && <TilesIcon fill="#333" />) || (
          <TilesIcon fill="#ddd" />
        )}
      </button>
    </div>
  )
}

export default ArticleLayoutToggle
