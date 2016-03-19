var path = require('path');
var webpack = require('webpack');
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    devtool: 'source-map',
    entry: [
    ],
    entry: [
      './src/main.js' // Your appʼs entry point
    ],
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
        root: path.resolve(__dirname),
        extensions: ['', '.js'],
        modulesDirectories: ['./src', 'node_modules']
    },
    plugins: [
        new LiveReloadPlugin(),
        //new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: ['babel'],
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],
                    cacheDirectory: true
                }
            }
        ]
    }
};
