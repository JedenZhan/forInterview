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
// loader 和 plugin的区别:
    // loader在于帮助webpack打包其他非commonjs规范的文件, 比如img, css, es6, .vue, .jsx
    // plugin在于扩展webpack的功能

// webpack 打包慢怎么办
// 1. 按需加载需要的包
// 2. 减少webpack-loader搜寻路径, exclude
