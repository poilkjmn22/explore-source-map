const merge = require('webpack-merge');
const base = require('./webpack.base.js');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(base, {
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/i,
            exclude: /(node_modules|bower_components)/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    plugins: [new BundleAnalyzerPlugin({
        analyzerMode: 'server'
    })]
})
