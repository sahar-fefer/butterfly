import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  pathPrefix: `/butterfly`,
  siteMetadata: {
    title: `butterfly`,
    siteUrl: `https://sahar-fefer.github.io/butterfly/`
  },
  plugins: [
    "gatsby-plugin-sass", 
  //   {
  //   resolve: 'gatsby-plugin-google-analytics',
  //   options: {
  //     "trackingId": ""
  //   }
  // }, 
  "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    // __key: "images"
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `gatsby-starter-default`,
      short_name: `starter`,
      start_url: `/`,
      background_color: `#663399`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/favicon.png`
    }}
  ]
};

export default config;
