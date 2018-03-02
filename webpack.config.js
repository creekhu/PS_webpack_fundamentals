var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        about: path.resolve(__dirname, 'src/js/about_page.js'),
        home: path.resolve(__dirname, 'src/js/home_page.js'),
        contact: path.resolve(__dirname, 'src/js/contact_page.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/assets/',
        filename: "[name].js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'shared',
            filename: 'shared.js'
        }),
        new ExtractTextPlugin("styles.css")
    ],
    watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": [
                            'env'
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(png|jpg|ttf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 100000
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.es6']
    }
}