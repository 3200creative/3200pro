// This is a placeholder for latent shadowing in sibling themes
/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"

const DarkModeIcon = () => {
  const [colorMode, setColorMode] = useColorMode()
  const newColorMode = colorMode === 'light'
    ? 'dark'
    : 'light'
  return (
    <button
      sx={{
        bg: 'black',
        color: 'white',
        borderRadius: '50px',
        fontsize: 1,
        width: 20,
      }}
      onClick ={e => {
        setColorMode(newColorMode)
      }}
    >
      {colorMode}
    </button>
  )
}

export default DarkModeIcon
