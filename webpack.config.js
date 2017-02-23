const path = require('path');

var ROOT_PATH = path.resolve(__dirname),
    BUILD_PATH = path.resolve(ROOT_PATH, 'build'),
    APP_PATH = path.resolve(ROOT_PATH, 'src');

module.exports = {
    devtool : "source-map",

    entry : APP_PATH + "/mixmind.js",

    output :{
        path : BUILD_PATH,
        filename : 'mixmind.min.js'
    } ,

    plugins : [
        
    ],
    module : {
        loaders : [
            {
                test : /\.css$/,
                loaders : ['style', 'css'],
                include : APP_PATH
            },
            {
                test : /\.json$/,
                loader : "json-loader"
            },
            {
                test : /\.js$/,
                loader : "babel-loader",
                exclude : /node_modules/
            }
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