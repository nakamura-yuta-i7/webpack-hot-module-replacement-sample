var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

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
    }),
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery"
    })
  ],
}