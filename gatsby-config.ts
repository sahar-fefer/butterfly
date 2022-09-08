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
      name: `butterflies are forever`,
      short_name: `Omer's butterflies`,
      description: `עומר נסעה לטיול הגדול, עם המון חלומות ותמימות שהכול אפשרי - עומר נהרגה בנפאל. ב-21 שנות חייה
      הצליחה בדרכה האמיתית והמיוחדת לגעת בליבם של הרבה אנשים, היא ידעה לתת מקום לכול אדם, וכשהיא
      הביטה בך, ידעת שהיא איתך. כדי להנציח את זכרה של עומר הקמנו שתי עמותות.`,
      start_url: `/`,
      background_color: `#FFFFFF`,
      theme_color: `#FFFFFF`,
      display: `minimal-ui`,
      icon: `src/images/favicon.png`
    }},
    {
    resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Assistant pro\:300,400,500,700`,
          `sans-serif pro\:300,400,500,700`
        ],
        display: 'swap'
      }}
  ]
};

export default config;
