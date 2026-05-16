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


/** Kookboek : tag pagina's */
 const kookboekTagsResult = await graphql(`
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


/** Kookboek : kok pagina's */
 const kookboekKoksResult = await graphql(`
    {
      allMarkdownRemark(
                    filter: { 
                       frontmatter: { 
                          pagetype: { eq: "kookboek" } }
                       }
              ) {
        nodes {
          frontmatter {
            kok
            slug
          }
        }
      }
    }
  `);

/** Kookboek : recepten pagina's */
  const kookboekReceptenResult = await graphql(`
    {
      allMarkdownRemark(
                    filter: { 
                       frontmatter: { 
                          pagetype: { eq: "kookboek" } }
                       }
              ) {
        nodes {
            frontmatter {
                title
                kok
                date(formatString: "DD/MM/YYYY")
                slug
                tags
                foto {
                   childImageSharp {
                    gatsbyImageData
                    }
                }
            }
            excerpt(pruneLength: 150)
            html
        }
      }
    }
  `);


/** Pagina's maken voor de tags */
  renderKookboekTagPages(kookboekTagsResult, createPage);

/** Pagina's maken voor de recepten */
  renderKookboekRecepten(kookboekReceptenResult, createPage);

/** Pagina's maken voor de koks */
  renderKookboekKokPages(kookboekKoksResult, createPage);

};



function renderKookboekRecepten(kookboekReceptenResult, createPage) {
    const recepten = kookboekReceptenResult.data.allMarkdownRemark.nodes;

    // Voor elk recept een pagina maken
    recepten.forEach(recept => {
        createPage({
            path: `/kookboek/${recept.frontmatter.slug}`,
            component: path.resolve("./src/templates/recept-detail-template.js"),
            context: { recept },
        });
    });
}

function renderKookboekTagPages(kookboekTagsResult, createPage) {
    
    const tagrecepten = kookboekTagsResult.data.allMarkdownRemark.nodes;

    // Alle unieke tags verzamelen
    const tags = [...new Set(tagrecepten.flatMap(r => r.frontmatter.tags))];

    // Voor elke tag een pagina maken
    tags.forEach(tag => {
        createPage({
            path: `/kookboek/tags/${tag}`,
            component: path.resolve("./src/templates/tag-template.js"),
            context: { tag },
        });
    });
}

function renderKookboekKokPages(kookboekKoksResult, createPage) {

    const kokrecepten = kookboekKoksResult.data.allMarkdownRemark.nodes;

    // Alle unieke koks verzamelen
    const koks = [...new Set(kokrecepten.flatMap(r => r.frontmatter.kok))];

    // Voor elke kok een pagina maken
    koks.forEach(kok => {
        createPage({
            path: `/kookboek/koks/${kok}`,
            component: path.resolve("./src/templates/kok-template.js"),
            context: { kok },
        });
    });
}
