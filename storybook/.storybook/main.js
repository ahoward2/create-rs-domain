// domain level storybook config

const {
  withStorybookModuleFederation,
} = require("storybook-module-federation");

const storybookConfig = {
  core: {
    builder: "webpack5",
  },
  // resolve stories from all clients
  stories: [
    "../src/**/*.stories.mdx",
    "../../features/example-feature-package-one/src/**/*.stories.mdx",
    "../../features/example-feature-package-one/src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../../features/example-feature-package-two/src/**/*.stories.mdx",
    "../../features/example-feature-package-two/src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
  ],
  addons: [
    "storybook-readme",
    "@storybook/addon-jest",
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "storybook-addon-performance/register",
    "@storybook/addon-storysource",
    { name: "@storybook/addon-essentials", options: { actions: false } },
  ],
};

const moduleFederationConfig = {
  name: "storybook",
  filename: "remoteEntry.js",
  remotes: {
    appOne: "appOne@http://localhost:2002/remoteEntry.js",
    appTwo: "appTwo@http://localhost:3002/remoteEntry.js",
  },
  exposes: {},
  shared: {
    react: {
      singleton: true,
    },
    "react-dom": {
      singleton: true,
    },
    "styled-components": {
      singleton: true,
    },
  },
};

module.exports = withStorybookModuleFederation(moduleFederationConfig)(
  storybookConfig
);
