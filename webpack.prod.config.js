const webpack = require('webpack');
const {merge} = require('webpack-merge');
const fs = require('fs');
let path = require('path');
const base = require('./webpack.base.config');

const entryList = {};
const libList = fs.readdirSync('./src');
if(Array.isArray(libList) && libList.length > 0){
    libList.map(it => {
        if(it !== '.DS_Store'){
            const key = it.replace('.js','')
            entryList[key] = path.join(__dirname, `./src/${it}`);
        }
    })
}

console.log(entryList
    
    )

module.exports = merge(base, {
    mode: 'production',
    // entry: entryList,
    // entry: ['./lib/dom.js','./lib/date.js'],
    entry: entryList,
    output: {
        library: 'utils',
        libraryTarget: 'commonjs2'
    }
})