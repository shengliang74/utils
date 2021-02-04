const webpack = require('webpack');
const {merge} = require('webpack-merge');
let path = require('path');
const base = require('./webpack.base.config')

module.exports = merge(base, {
    mode: 'production',
})