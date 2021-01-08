var crypto = require("crypto")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`type C32Config implements Node {
    contentPath: String!
    assetPath: String!
  }`)
}

exports.sourceNodes = (
  { actions: { createNode }, schema },
  { contentPath = "content/pages", assetPath = "content/assets" }
) => {
  // create garden data from plugin config
  const c32Config = {
    contentPath,
    assetPath,
  }
  createNode({
    ...c32Config,
    id: `c32-config`,
    parent: null,
    children: [],
    internal: {
      type: `C32Config`,
      contentDigest: crypto
        .createHash(`md5`)
        .update(JSON.stringify(c32Config))
        .digest(`hex`),
      content: JSON.stringify(c32Config),
      description: `C32 Config`,
    },
  })
}
