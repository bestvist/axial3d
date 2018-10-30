const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'axial3d.min.js'
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