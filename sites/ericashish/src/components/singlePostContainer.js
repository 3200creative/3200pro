/** @jsx jsx */
import { jsx } from "theme-ui"
import MailChimpForm from '../../src/components/MailChimpForm'

const PostContent = ({ children }) => {
  return (
    <div
      sx={{
        maxWidth: "100%",
        width: "maxContentWidth",
        mt: 3,
        mb: 5,
        mx: "auto",
        px: 3,
        variant: "variants.postContainer",
      }}
    >
      {children}
    </div>
  )
}

export default PostContent
