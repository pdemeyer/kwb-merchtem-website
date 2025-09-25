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
    `gatsby-remark-images`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                "heading[depth=1]": "text-4xl font-bold text-theme-heading mt-8 mb-4",
                "heading[depth=2]": "text-3xl font-bold text-theme-heading mt-6 mb-3",
                "heading[depth=3]": "text-2xl font-semibold text-theme-heading mt-5 mb-2",
                paragraph: "text-theme-text mb-4",
                list: "list-disc pl-6 mb-4 text-theme-text",
                listItem: "mb-1",
                link: "text-theme-link hover:text-theme-link-hover",
                blockquote: "border-l-4 border-theme-accent pl-4 italic text-theme-text mb-4",
                code: "bg-theme-accent text-sm px-1 py-0.5 rounded",
                inlineCode: "bg-theme-accent text-sm px-1 py-0.5 rounded",
                thematicBreak: "my-6 border-t border-theme-accent",
              },
            },
          },
        ],
      },
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
      resolve: `gatsby-plugin-build-date`,
      options: {
        formatting: {
          format: `YYYY/MM/DD HH:mm:ss`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-K1CJLDE717", // Google Analytics / GA
           ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          origin: "YOUR_SELF_HOSTED_ORIGIN",
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },
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