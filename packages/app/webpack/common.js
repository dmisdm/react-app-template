const path = require("path");
module.exports = config => {
  config.module.loaders[0].exclude.push(/\.(ts|tsx)$/);

  config.module.loaders = [
    ...config.module.loaders,
    {
      test: /.(ts|tsx)$/,
      loader: "awesome-typescript",
      exclude: /node_modules/
    }
  ];

  config.resolve.extensions = [".ts", ".tsx", ...config.resolve.extensions];
  config.resolve.root = [path.resolve("../src")];

  return config;
};
