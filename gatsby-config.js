module.exports = {
  siteMetadata: {
    title: "AudioCORE",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "fGtf9Sn7_JDsHImITVeFpKfdFUAH7SFJcWG-DUkiMYk",
        spaceId: "nay0f8rrd6tl",
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
