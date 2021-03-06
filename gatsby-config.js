module.exports = {
  siteMetadata: {
    title: "AudioCORE",
    siteUrl: "https://www.google.com"
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "wgLnV90q7WemK1FCF3vzkCtCGlQhCnJysCYpwqF8f0s",
        spaceId: "vc3arzdx0ks5",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
