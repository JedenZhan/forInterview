const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

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
                // exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
                // ExtractTextPlugin.extract({
                //     fallback: 'style-loader',
                //     use: [{
                //         loader: 'css-loader',
                //         options: {
                //             importLoaders: 1,
                //             modules: true,
                //             localIdentName: '[name]__[local]__[hash:base64:5]'
                //         }
                //     },
                //     {
                //         loader: 'postcss-loader',
                //         options: {
                //             ident: 'postcss',
                //             plugins: () => [
                //                 autoprefixer({
                //                     browsers: [
                //                        "> 1%",
                //                        "last 2 versions"
                //                     ]
                //                 })
                //             ]
                //         }
                //      }
                //     ]
                // })
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
    // soloves: [ '', '.js', '.css', '.styl' ],
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            title: 'hello Jeden',
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        // new ExtractTextPlugin('bundle.css')
    ],
    
    devServer: {
        port: 8080,
        hot: true,
        // open: true
    }
}

module.exports = config