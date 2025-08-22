/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `KWB Merchtem Portaal Site`,
    author: {
      name: `Pauwel Demeyer`,
      summary: `father, husband, engineer, musician, and occasional photographer.`,
    },
    description: `KWB Merchtem Portaal`,
    siteUrl: `https://www.kwbmerchtem.be/`,
    social: {
      twitter: `pdemeyer`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-mdx`,	
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `all-content`,
        path: `${__dirname}/content`,
      }
    },
//    {
//      resolve: `gatsby-plugin-mdx`,
//      options: {
//        extensions: [`.md`, `.mdx`],
//      
//      }
//    },
    {
      resolve: `gatsby-transformer-remark`
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Radio Canada Big`,
            file: `https://fonts.googleapis.com/css2?family=Radio+Canada+Big:ital,wght@0,400..700;1,400..700&family=Radio+Canada:ital,wght@0,300..700;1,300..700&display=swap`,
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    'gatsby-plugin-build-date',
    `gatsby-plugin-sharp`,
    'gatsby-plugin-postcss',

    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `KWB Merchtem App`,
        short_name: `KWB Merchtem`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.jpg`, // This path is relative to the root of the site.
      },
    },

    `gatsby-plugin-offline`
  ],
}