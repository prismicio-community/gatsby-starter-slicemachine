const { getStoriesPaths } = require("slice-machine-ui/helpers/storybook");

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../.slicemachine/**/*.stories.@(js|jsx|ts|tsx)",
    ...getStoriesPaths(),
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-gatsby",
  ],
  core: {
    builder: "webpack5",
  },
};
