let path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'utils.js',
        library: 'utils',
        libraryExport: "default",
        libraryTarget: 'umd'
    }
}