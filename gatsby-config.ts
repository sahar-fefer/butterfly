import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `butterfly`,
    siteUrl: `https://sahar-fefer.github.io/butterfly/`
  },
  pathPrefix: "/butterfly",
  plugins: [
    "gatsby-plugin-sass", 
  //   {
  //   resolve: 'gatsby-plugin-google-analytics',
  //   options: {
  //     "trackingId": ""
  //   }
  // }, 
  "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    // __key: "images"
  }]
};

export default config;
