import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Hero from "./src/components/ui/hero"

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={{ Hero }}>{element}</MDXProvider>
}
