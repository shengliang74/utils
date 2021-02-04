const webpack = require('webpack');
const {merge} = require('webpack-merge');
let path = require('path');
const base = require('./webpack.base.config')

module.exports = merge(base, {
    mode: 'development',
    devServer: {
        port: 8089,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        // host: '192.168.0.106'
        host: '127.0.0.1'
    },
})