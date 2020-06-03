const merge = require('webpack-merge');
const webpack = require('webpack');
const base = require('./webpack.base.js');

module.exports = merge(base, {
    mode: 'development',
    devtool: 'source-map',
    module: {
      rules: [{
          test: /\.(sa|sc|c)ss$/i,
          exclude: /(node_modules|bower_components)/,
          use: ['style-loader', 'css-loader', 'sass-loader']
      }]
    },
    devServer: {
        compress: false,
        hot: true,
        port: 8080
    }
})
