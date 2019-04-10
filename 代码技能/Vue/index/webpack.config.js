const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    VuePlugin = require('vue-loader/lib/plugin')


const config = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.stylus$/,
                use: ['style-loader', 'css-loader', 'stylus-loader']
            },
            {
                test: /\.css$/,
                use: ['css-loader', 'style-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new VuePlugin()
    ],
    devServer: {
        port: 8080,
        hot: true
    }
}

module.exports = config;