const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        port: 9000,
        hot: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                secure: false
            }
        },
        historyApiFallback: true,
    }
});