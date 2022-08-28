const webpack = require('webpack');
const path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');


module.exports = {
    entry: './js/index.js',
    output: {
        path: __dirname+'/dist',
        filename: 'bundle.js',
    },
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, "./dist")
        },
        hot: true,
        port: 3000,
        historyApiFallback: {index: "index,html"}
    },
    plugins: [new webpack.HotModuleReplacementPlugin(), new HtmlWebpackPlugin({
        template: "./index.html",
        filename: "index.html"
    }), new CleanWebpackPlugin()],
    module: {
        rules:[{
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }, {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource'
        }]
    }
    //mode: 'production'
}

