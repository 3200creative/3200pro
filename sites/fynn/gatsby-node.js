const { isFuture } = require("date-fns");

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createSchemaCustomization = ({ actions, schema }) => {
  actions.createTypes([
    schema.buildObjectType({
      name: "SanityPost",
      interfaces: ["Node"],
      fields: {
        isPublished: {
          type: "Boolean!",
          resolve: (source) => new Date(source.publishedAt) <= new Date(),
        },
      },
    }),
  ]);
};

async function createLandingPages(pathPrefix = "/", graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityRoute(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const routeEdges = (result.data.allSanityRoute || {}).edges || [];
  routeEdges.forEach((edge) => {
    const { id, slug = {} } = edge.node;
    const path = [pathPrefix, slug.current, "/"].join("");
    reporter.info(`Creating landing page: ${path}`);
    createPage({
      path,
      component: require.resolve("./src/templates/LandingPage.js"),
      context: { id },
    });
  });
}

async function createBlogPostPages(pathPrefix = "/blog", graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } }, isPublished: { eq: true } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityPost || {}).edges || [];
  postEdges
    .filter((edge) => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      // create prev and next on each posts render (for Blog Post Pagination, BPP)
      const previous = index === postEdges.length - 1 ? null : postEdges[index + 1].node
      const next = index === 0 ? null : postEdges[index - 1].node
      //
      const { id, slug = {} } = edge.node;
      const path = `/${slug.current}/`;
      reporter.info(`Creating Blog Post: ${path}`);
      createPage({
        path,
        component: require.resolve("./src/templates/blog-post.js"),
        context: { 
          id,
          previous,
          next, },
      });

    });
    const postsPerPage = 12
    const numPages = Math.ceil(postEdges.length / postsPerPage)

        Array.from({ length: numPages }).forEach((_, i) => {
          reporter.info(`Creating Archive Page For Blog`);
            createPage({
                path: i === 0 ? `/blog` : `/blog/${i + 1}`,
                component: require.resolve("./src/templates/blogArchive.js"),
                context: {
                    limit: postsPerPage,
                    skip: i * postsPerPage,
                    numPages,
                    currentPage: i + 1
                },
            });
        });

}


async function createProductPages(pathPrefix = "/shop/", graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityProduct(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const productEdges = (result.data.allSanityProduct || {}).edges || [];
  productEdges
    .filter((edge) => !isFuture(edge.node.publishedAt))
    .forEach((edge) => {
      const { id, slug = {} } = edge.node;
      const path = `${pathPrefix}/${slug.current}/`;
      reporter.info(`Creating Product Page: ${path}`);
      createPage({
        path,
        component: require.resolve("./src/templates/product.js"),
        context: {
          id },
      });
    });
}

async function createPostCateogryArchives(disregardThis = "/shop/", graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityCategory(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            title
            _id
            description
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;
  const categoryEdges = (result.data.allSanityCategory || {}).edges || [];
  // Pagination
  categoryEdges
    .forEach((edge) => {
      const { id, slug = {} } = edge.node;
      const path = `/${slug.current}/`;
      reporter.info(`Creating Category Archive: ${path}`);
      createPage({
        path,
        component: require.resolve("./src/templates/categoryArchive.js"),
        context: { id },
      });
    });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createLandingPages("/", graphql, actions, reporter);
  await createBlogPostPages("/", graphql, actions, reporter);
  await createProductPages("/shop", graphql, actions, reporter);
  await createPostCateogryArchives("/category", graphql, actions, reporter);
};
