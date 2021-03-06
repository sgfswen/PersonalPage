var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var ENV = process.env.NODE_ENV.trim();

/*插件定义*/
var plugins = [
    new HtmlwebpackPlugin({
        chunks: ['index', 'vendor'],
        template: './template/index.html',
        filename: path.resolve(ROOT_PATH, 'index.html'),
        hash: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
    }),
    new webpack.HotModuleReplacementPlugin()
]

/*生产环境下的插件补充*/
ENV === 'production' && plugins.push(new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress: {
        warnings: false,
        drop_console: true,
    }
}));

module.exports = {
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: {
        index: './index.js',
        vendor: ["react", "react-dom", "react-router", "jquery"]
    },
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        /*        publicPath: "/output/",*/
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            }, {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: '/node_modules/'
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=40000'
            }
        ]
    },
    devServer: {
        hot: true,
        compress: true,
        historyApiFallback: true,
        publicPath: '/build/',
        port: 3000
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: '/node_modules/'
    },
    plugins: plugins
};
