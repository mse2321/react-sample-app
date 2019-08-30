const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

module.exports = {
  entry: ['./src/js/index.js','./scss/main.scss'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  cache: true,
  watch: true,
  "module": {
    rules: [
        {
          exclude: "/node_modules/",
          loader: "babel-loader",
          options: {
            presets: ["react"]
          },
          test: /\.(js|jsx|mjs)$/
        },
        {
          test: /\.scss$/,
          use: [
              "style-loader", // creates style nodes from JS strings
              "css-loader", // translates CSS into CommonJS
              "sass-loader" // compiles Sass to CSS
          ]
        }
    /*  ,{
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["eslint-loader"]
        } */
    ]
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  }
};
