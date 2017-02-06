var commonConfig = require('./webpack.common.js');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
  devtool: 'inline-source-map',
  plugins: [
    new ExtractTextPlugin('[name].css'),
  ]
});
