const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv=require('dotenv-webpack')
module.exports = {
  entry: path.resolve(__dirname, "../src/index.tsx"),

  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new Dotenv(),
  ],
};
