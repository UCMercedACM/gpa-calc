/* global __dirname, require, module*/

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require("path");
const env = require("yargs").argv.env; // use --env with webpack 2

const config = {
  entry: ["./app/index.js"],
  mode: (env === "build") ? "development" : "none",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "game-lib" + ((env === "build") ? ".min.js" : ".js"),
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  resolve: {
    extensions: [".js"]
  },
  stats: {
    colors: true
  },
  devServer: {
    port: 3000,
    contentBase: __dirname + "/build",
    inline: true
  },
  plugins: []
};

module.exports = config;
