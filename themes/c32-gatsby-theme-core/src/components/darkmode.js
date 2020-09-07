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
    role= 'button'
    tabindex= '0'
    
      sx={{
        background: 'transparent',
        fontsize: 1,
        border: 'none',
        position: 'absolute',
        top: '20px',
        right: '30px',
        color: colorMode === 'light' ? 'text' : 'text',
        outline: 'none !important',
        variant: 'variants.darkmodeicon',
        ':focus': {
          outline: 'none !important',
        },
      }}
      onClick ={e => {
        setColorMode(newColorMode)        
      }}
      onKeyDown={e => {
        setColorMode(newColorMode)        
      }}
    >
      {colorMode === 'light' ? '☾' : '☼' }
    </div>
  )
}

export default DarkModeIcon
