// webpack.prod.config.js
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const commonConfig = require("./webpack.config.js");

const prodConfig = merge(commonConfig, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css"
    })
  ]
});

module.exports = prodConfig;