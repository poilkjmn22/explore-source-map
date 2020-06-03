const merge = require('webpack-merge');
const base = require('./webpack.base');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(base, {
    mode: 'production',
    devtool: "hidden-source-map",
    module: {
      rules: [{
        test: /\.(sa|sc|c)ss$/i,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {},
        }, 'css-loader', 'sass-loader']
      }]
    },
    optimization: {
        minimizer: [new UglifyjsPlugin()],
    },
    plugins: [
      new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: '[name].[hash].css',
          chunkFilename: '[id].[hash].css',
      }),
    ],
})
