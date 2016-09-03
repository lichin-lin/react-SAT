var Path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('./config.js');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        historyApiFallback: true
    },
    entry: [
        'webpack-hot-middleware/client',
        './src/index.js'
    ],
    output: {
        path: Path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    // require without Filename Extension
    resolve: {
        extensions: ['', '.js', '.jsx', '.styl', '.html', '.ejs'],
        packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
    },
    module: {
        loaders: [
        {
            test: /\.(jsx|js)$/,
            exclude: /node_modules/,
            loaders: ['babel-loader'],
            include: Path.join(__dirname, 'src/')
        },
        {
            test: /\.sass$/, loader: "style!css!sass"
        },
        {
            test: /\.css$/, loader: 'style!css'
        },
        {
            test: /\.styl$/,
            loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus-loader'
        },
        {
            test: /\.json$/, loader: 'json'
        },
        {
            test: /\.(ttf|eot|png|gif|jpg|woff|woff2|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=8192"
        },
        {
            test: /\.(html|png)$/,
            loader: "file?name=[path][name].[ext]&context=./src"
        }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.ejs',
            inject: 'body'
        })
    ],
};
