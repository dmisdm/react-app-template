const DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = config => {
  config.plugins = [...config.plugins, new DashboardPlugin()];
  return config;
};
