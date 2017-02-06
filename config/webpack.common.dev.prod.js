var commonConfig = require('./webpack.common.js');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// factor out configuration common to dev and prod but not test
module.exports = webpackMerge(commonConfig, {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: [
        'app',
        'vendor',
        'polyfills',
      ]
    }),
    new HtmlWebpackPlugin({
      favicon: 'public/favicon.ico',
      template: 'src/index.html'
    }),
  ]
});
