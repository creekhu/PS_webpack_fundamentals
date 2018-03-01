const WebpackStrip = require('strip-loader');
const devConfig = require('./webpack.config.js');

const stripLoader = {
    test: [
        /\.js$/, 
        /\.es6$/
    ],
    exclude: /node_modules/,
    use: {
        loader: WebpackStrip.loader('console.log')
    }
}

export default devConfig.module.rules.push(stripLoader);


