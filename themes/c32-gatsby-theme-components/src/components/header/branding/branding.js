/** @jsx jsx */
import { jsx } from "theme-ui"
import Logo from "./branding-logo"

const SiteBranding = () => {
  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        ml: 2,
        mr: 2,
      }}
    >
      <Logo />
    </div>
  )
}

export default SiteBranding
