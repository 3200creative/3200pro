import { useStaticQuery, graphql } from "gatsby"
export const useC32Config = () => {
  const { c32Config } = useStaticQuery(
    graphql`
      query {
        c32Config {
          contentPath
          assetPath
        }
      }
    `
  )
  return c32Config
}
