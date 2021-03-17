// This is a placeholder for latent shadowing in sibling themes
/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"

const DarkModeIcon = () => {
  const [colorMode, setColorMode] = useColorMode('light')
  const newColorMode = colorMode === 'light'
    ? 'dark'
    : 'light'
  return (
    <div
      sx={{
        background: 'transparent',
        fontsize: 1,
        border: 'none',
        position: 'absolute',
        top: '20px',
        right: '30px',
        color: colorMode === 'light' ? 'text' : 'text',
        variant: 'variants.darkmodeicon'
      }}
      onClick ={e => {
        setColorMode(newColorMode)        
      }}
    >
      {colorMode === 'light' ? '☾' : '☼' }
    </div>
  )
}

export default DarkModeIcon