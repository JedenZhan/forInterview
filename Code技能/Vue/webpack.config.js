const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    VuePlugin = require('vue-loader/lib/plugin'),
    PnpWebpackPlugin = require('pnp-webpack-plugin')


const config = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].js'
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
                use: ['style-loader', 'css-loader']
            },
            {
                test: /.(eot|svg|ttf|woff|woff2)$/,
                use: 'file-loader'
            } // use会loaders一样, 可以传入数组, loader只需要一个
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.json', '.jsx', '.css'],
        plugins: [PnpWebpackPlugin]
    },
    resolveLoader: {
        plugins: [
            PnpWebpackPlugin.moduleLoader(module)
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
        port: 8081,
        hot: true,
        open: true
    }
}

module.exports = config;
// loader 和 plugin的区别:
// loader在于帮助webpack打包其他非commonjs规范的文件, 比如img, css, es6, .vue, .jsx
// plugin在于扩展webpack的功能

// webpack 打包慢怎么办
// 1. 按需加载需要的包
// 2. 减少webpack-loader搜寻路径, exclude

'当前配置问题就是打包后没有分文件, 就一个bundle.js文件. 太大了'