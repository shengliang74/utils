const webpack = require('webpack');
const {merge} = require('webpack-merge');
let path = require('path');
const base = require('./webpack.base.config')

module.exports = merge(base, {
    mode: 'production',
    entry: path.join(__dirname, './index.js'),
    output: {
        library: 'utils',
        libraryTarget: 'commonjs2'
    }
})