var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.resolve('js'),
    entry: {
        about: './about_page.js',
        home: './home_page.js',
        contact: './contact_page.js'
    },
    output: {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js',
        filename: "[name].js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'shared',
            filename: 'shared.js'
        })
    ],
    devServer: {
        contentBase: 'public'
    },
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
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.es6']
    }
}