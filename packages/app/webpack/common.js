const path = require("path");
const CircularDependencyPlugin = require("circular-dependency-plugin");
module.exports = config => {
  config.module.loaders[0].exclude.push(/\.(ts|tsx)$/);

  config.module.loaders = [
    ...config.module.loaders,
    {
      test: /.(ts|tsx)$/,
      loaders: ["awesome-typescript"],
      exclude: /node_modules/
    }
  ];

  config.resolve.extensions = [".ts", ".tsx", ...config.resolve.extensions];
  config.resolve.root = [path.resolve("../src")];

  config.plugins.push(new CircularDependencyPlugin());

  return config;
};
