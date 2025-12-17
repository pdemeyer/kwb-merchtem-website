/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark(
                    filter: { 
                       frontmatter: { 
                          pagetype: { eq: "kookboek" } }
                       }
              ) {
        nodes {
          frontmatter {
            tags
            slug
          }
        }
      }
    }
  `);

  const recipes = result.data.allMarkdownRemark.nodes;

  // Alle unieke tags verzamelen
  const tags = [...new Set(recipes.flatMap(r => r.frontmatter.tags))];

  // Voor elke tag een pagina maken
  tags.forEach(tag => {
    createPage({
      path: `/kookboek/tags/${tag}`,
      component: path.resolve("./src/templates/tag-template.js"),
      context: { tag },
    });
  });
};

