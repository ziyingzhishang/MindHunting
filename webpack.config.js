const path = require('path')
      webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname),
    BUILD_PATH = path.resolve(ROOT_PATH, 'build'),
    APP_PATH = path.resolve(ROOT_PATH, 'src');

var HtmlwebpackPlugin = require('html-webpack-plugin')
    // ExtractTextwebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool : "source-map",

    entry : APP_PATH + "/mixmind.js",

    output :{
        path : BUILD_PATH,
        filename : 'mixmind.min.js'
    } ,

    plugins : [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlwebpackPlugin({
            title : "MixMind",
            hash : true,
            inject : 'head'
        }),
        // new webpack.optimize.CommonsChunkPlugin("commons.js")
        // new webpack.optimize.OccurenceOrderPlugin()
    ],
    module : {
        loaders : [
            { test : /\.css$/, loaders : "style-loader!css-loader", include : ROOT_PATH + "/res/css" },
            { test : /\.json$/, loader : "json-loader" },
            { test : /\.(jpg|png)$/, loader: "url-loader?limit=8192" },
            { test : /\.js$/, loader : "babel-loader", exclude : /node_modules/ },
            { test : /\.scss$/, loader : "style-loader!css-loader!sass-loader" }
        ]
    },

    devServer : {
        contentBase : BUILD_PATH,
        historyApiFallback : true,
        hot : true,
        inline : true,
        progress : true,
        colors : true       //the color in console
    }
};