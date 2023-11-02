const webpack = require("@nativescript/webpack");
const { resolve } = require('path');
module.exports = (env) => {
  webpack.init(env);
  webpack.chainWebpack((config) => {
    config.devServer.hotOnly(true);
    config.devServer.hot(true);

    config.resolve.alias.set(
      '@solid-x-platforms/components',
      resolve(__dirname, '../../packages/components/src/')
    );
    config.resolve.alias.set(
      '@solid-x-platforms/utils',
      resolve(__dirname, '../../packages/utils/src/')
    );
  });
  return webpack.resolveConfig();
};