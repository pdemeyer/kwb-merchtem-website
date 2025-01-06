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
    siteUrl: `https://raakmerchtem.be/`,
    social: {
      twitter: `pdemeyer`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-mdx`,	
    `gatsby-plugin-sass`,
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
        name: `nieuws`,
        path: `${__dirname}/content/nieuws`,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/mystyles.scss'], // applies purging only on the bulma css file
        printRejected: true,
      },
    }, // must be after other CSS plugins
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}