var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
// var CopyWebpackPlugin = require("copy-webpack-plugin");

var METADATA = {
  TITLE: "Webpack Dev Server",
};

module.exports = {
  METADATA: METADATA,
  entry: {
    app: [
      "./src/app.js",
    ],
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name]/bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      { test: /\.css$/, loader: "style!css", },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      METADATA: JSON.stringify(METADATA)
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: "body",
    }),
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery"
    }),
    // new CopyWebpackPlugin([
    //   { from: 'src/api', to: 'api' },
    // ], {
    //   ignore: [],
    //   copyUnmodified: true,
    // }),
  ],
}
