const webpack = require('webpack');
const {merge} = require('webpack-merge');
let path = require('path');
const base = require('./webpack.base.config')

module.exports = merge(base, {
    mode: 'development',
    entry: path.join(__dirname, './test/local.js'),
    devServer: {
        port: 8089,
        contentBase: path.join(__dirname, './lib'),
        historyApiFallback: true,
        // host: '192.168.0.106'
        host: '127.0.0.1'
    },
})