let path = require('path');

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'utils.js',
        library: 'utils',
        libraryTarget: 'commonjs2'
    }
}