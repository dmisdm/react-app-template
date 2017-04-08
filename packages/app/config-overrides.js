const devConfig = require("./webpack/dev");
const prodConfig = require("./webpack/prod");
const common = require("./webpack/common");

const isProd = env => env === "production";

module.exports = (config, env) => {
  const output = Object.assign(
    {},
    common(config),
    isProd(env) ? prodConfig(config) : devConfig(config)
  );
  return output;
};
