const path = require('path');

module.exports = () => ({
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
    devServer: {
        devMiddleware: {
            publicPath: '/dist'
        }
    }
});