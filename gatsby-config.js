require("dotenv").config();

const customTypeModels = require("fs")
  .readdirSync("./customtypes", { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((dir) => require(`./customtypes/${dir.name}/index.json`));

const sharedSliceModels = require("fs")
  .readdirSync("./src/slices", { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((dir) => require(`./src/slices/${dir.name}/model.json`));

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
  },
  plugins: [
    "gatsby-plugin-loadable-components-ssr",
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        linkResolver: require("./src/linkResolver").linkResolver,
        schemas: {
          "home-page": {},
          menu: {},
          page: require("./customtypes/page/index.json").json,
        },
        // customTypeModels,
        sharedSliceModels,
      },
    },
    {
      resolve: "gatsby-plugin-prismic-previews",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
      },
    },
  ],
};
