const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    PnpWebpackPlugin = require('pnp-webpack-plugin')

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
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']

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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
    
    devServer: {
        port: 8080,
        hot: true,
        open: true
    }
}

module.exports = config