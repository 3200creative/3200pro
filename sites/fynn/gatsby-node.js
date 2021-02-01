const { isFuture } = require("date-fns");
const _ = require("lodash");
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

async function createBlogPostPages(pathPrefix = "", graphql, actions, reporter) {
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

// async function createPostCategoryArchives(disregardThis = "/shop/", graphql, actions, reporter) {
//   const { createPage } = actions;
//   const result = await graphql(`
//     {
//       allSanityCategory(filter: { slug: { current: { ne: null } } }) {
//         edges {
//           node {
//             id
//             title
//             _id
//             description
//             slug {
//               current
//             }
//           }
//         }
//       }
//     }
//   `);
//   if (result.errors) throw result.errors;
//   const categoryEdges = (result.data.allSanityCategory || {}).edges || [];
//   // Pagination
//   categoryEdges
//     .forEach((edge, index) => {
//       // create prev and next on each posts render (for Blog Post Pagination, BPP)
//       const previous = index === categoryEdges.length - 1 ? null : categoryEdges[index + 1].node
//       const next = index === 0 ? null : categoryEdges[index - 1].node
//       //
//       const { id, slug = {} } = edge.node;
//       const path = `/${slug.current}/`;
//       reporter.info(`Creating Category Archive: ${path}`);
//       createPage({
//         path,
//         component: require.resolve("./src/templates/categoryArchive.js"),
//         context: { id, previous, next },
//       });
//       const postsPerPage = 12
//       const numPages = Math.ceil(categoryEdges.length / postsPerPage)
//           Array.from({ length: numPages }).forEach((_, i) => {
//             reporter.info(`Creating Category Pages`);
//               createPage({
//                   path: i === 0 ? `${slug.current}` : `${slug.current}/${i + 1}`,
//                   component: require.resolve("./src/templates/categoryArchive.js"),
//                   context: {
//                     id,
//                     previous,
//                     next,
//                       limit: postsPerPage,
//                       skip: i * postsPerPage,
//                       numPages,
//                       currentPage: i + 1
//                   },
//               });
//           });
//     });
// }


function getCategoryURL(category, pageNum) {
  if(pageNum===0){
    return '/'+category.slug.current;
  }else{
    return '/'+category.slug.current + "/" + (pageNum + 1)
  }
}

async function createCategoryPaginatedPage(category, actions) {
  const PER_PAGE = 12;
  const maxPage = Math.ceil(category.posts.length / PER_PAGE) - 1;

  for (let page = 0; page <= maxPage; page++) {
    const posts = category.posts.slice(page * PER_PAGE, (page + 1) * PER_PAGE);
    const path = getCategoryURL(category, page);

    const pagination = {
      current: page,
      last: maxPage,
      next: page < maxPage ? getCategoryURL(category, page + 1) : null,
      previous: page > 0 ? getCategoryURL(category, page - 1) : null,
    };

    actions.createPage({
      path: path,
      component: require.resolve("./src/templates/categoryArchive.js"),
      context: { posts, category, pagination
      },
    });
  }
}

async function createCategoryPostPages(graphql, actions) {
  const { data } = await graphql(`
    query Posts {
      allSanityPost {
        nodes {
          id
          publishedAt
          title
          slug {
            current
          }
          categories {
            slug {
              current
            }
            title
          }
          featuredImage {
            asset {
              _id
              url
              fluid(maxWidth: 600) {
                base64
                srcWebp
                srcSetWebp
                srcSet
                src
                sizes
                aspectRatio
              }
              source {
                url
              }
            }
            crop {
              bottom
              left
              top
              right
            }
            hotspot {
              x
              y
              height
              width
            }
            alt
          }
        }
      }
    }
  `);
  const posts = data.allSanityPost.nodes;

  // this will extract all categories but will return duplicates
  const allCategories = posts.flatMap((post) => {
    return post.categories;
  });

  const uniqueCategories = _.uniqBy(allCategories, (category) => category.slug.current);

  // create a copy of the categories, otherwise it will create a circular json structure ( throws error)
  const copiedUniqueCategories = JSON.parse(JSON.stringify(uniqueCategories));
  // populate the posts of each category
  copiedUniqueCategories.forEach((category) => {
    category.posts = posts.filter((post) => {
      return !!post.categories.find(
        (innerCategory) => innerCategory.slug.current === category.slug.current
      );
    });
  });

  // for each category, create the page..
  await Promise.all(
    copiedUniqueCategories.map((category) => createCategoryPaginatedPage(category, actions))
  );
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createLandingPages("/", graphql, actions, reporter);
  await createBlogPostPages("/", graphql, actions, reporter)
  await createCategoryPostPages(graphql, actions);
  await createProductPages("/shop", graphql, actions, reporter);
};
