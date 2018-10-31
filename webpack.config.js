const path = require('path');

const libName = 'axial3d';

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        libraryTarget: 'umd',
        library: libName,
        path: path.resolve(__dirname, 'dist'),
        filename: libName + '.min.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/, 
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        ]
    }
}