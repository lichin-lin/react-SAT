/*
 * Webpack distribution configuration
 *
 * This file is set up for serving the distribution version. It will be compiled to dist/ by default
 */
'use strict';
var webpack = require('webpack');
var Path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry:{
        bundle :[
            Path.resolve(__dirname, 'src/index.js')
        ],
        vendor: [
            "react",
            "react-dom",
            "react-router-bootstrap",
            "react-bootstrap",
            "react-bootstrap-datetimepicker",
            "react-flip-move",
            "react-redux",
            "react-router",
            "react-router-redux",
            "redux",
            "redux-actions",
            "redux-promise",
            "redux-thunk",
            "codemirror",
            "bootstrap",
            "sweetalert",
            "react-nl2br",
            "classnames",
            "history",
            "isomorphic-fetch",
            "jquery"
        ]
    },
    output: {
        path: Path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
        publicPath: require('./config.js').publicPath
    },
    debug: false,
    devtool: false,
    stats: {
        colors: true,
        reasons: false,
        progress: true
    },
    // require without Filename Extension
    resolve: {
        extensions: ['', '.js', '.jsx'],
        /**
         * if you require something in library module, you can alias it
         * and require without path
         */
        // alias: {
        //      'angular': 'angular/angular',
        //      'lodash': 'lodash/dist/lodash'
        // },
    },
    module: {
        loaders: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                noParse: "/node_modules/",
                include: Path.join(__dirname, 'src/')
            },
            {
                test: /\.sass$/, 
                //loader: "style!css!sass",
                loader:  ExtractTextPlugin.extract("style-loader","css-loader!sass-loader")
            },
            {
                test: /\.css$/,
                loader:  ExtractTextPlugin.extract("style-loader","css-loader")
                //loader: 'style-loader!css-loader'
            },
            {
                test: /\.json$/,
                loader: 'json'
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
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.[hash].js'),
        new ExtractTextPlugin("styles.[hash].css"),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'root.jQuery': 'jquery'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                properties: true,
                sequences: true,
                dead_code: true,
                drop_console: true,
                conditionals: true,
                comparisons: true,
                evaluate: true,
                booleans: true,
                unused: true,
                loops: true,
                hoist_funs: true,
                cascade: true,
                if_return: true,
                join_vars: true,
                drop_debugger: true,
                unsafe: true,
                hoist_vars: true,
                negate_iife: true,
            },
            comments: false,
            mangle: true,
            minimize: true,
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.ejs',
            inject: 'body'
        })
    ],
};
