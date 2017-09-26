const path = require("path");
const CircularDependencyPlugin = require("circular-dependency-plugin");
const { TsConfigPathsPlugin } = require("awesome-typescript-loader");
//const Config = require("webpack-chain");
module.exports = _config => {
  _config.module.rules[1].exclude.push(/.(ts|tsx)$/);
  _config.module.rules = _config.module.rules.concat([
    {
      test: /.(ts|tsx)$/,
      exclude: [/node_modules/],
      loader: "awesome-typescript-loader"
    }
  ]);

  _config.plugins.push(
    new CircularDependencyPlugin(),
    new TsConfigPathsPlugin()
  );
  _config.resolve.extensions = _config.resolve.extensions.concat([
    ".ts",
    ".tsx"
  ]);
  return _config;
};
