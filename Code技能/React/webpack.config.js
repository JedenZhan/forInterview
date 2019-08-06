const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    PnpWebpackPlugin = require('pnp-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.styl$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']

            },
            {
                test: /\.(jpg|jpeg|webp|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                        },
                    }
                ],
            },

            {
                test: /.(eot|svg|ttf|woff|woff2)$/,
                use: 'file-loader'
            }
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
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
            template: './index.html',
            title: 'hello Jeden',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
    
    devServer: {
        port: 8088,
        hot: true,
        open: true
    }
}

module.exports = config