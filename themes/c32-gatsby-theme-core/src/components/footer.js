// This is a placeholder for latent shadowing in sibling themes
/** @jsx jsx */
import { jsx } from "theme-ui"

const SiteFooter = () => {
  return (
    <footer
      sx={{
        p: 3,
        background: 'transparent',
        gridArea: "footer",
        variant: "variants.footer",
      }}
      id="footer"
    >
      <p>Footer area for latent shadowing in sibling themes</p>
    </footer>
  )
}

export default SiteFooter
