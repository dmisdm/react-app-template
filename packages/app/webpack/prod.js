const OfflinePlugin = require("offline-plugin");
module.exports = config => {
  config.plugins = [...config.plugins, new OfflinePlugin()];
  return config;
};
