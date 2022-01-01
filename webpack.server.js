const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
    target: "node",
    entry: "./src/index.js",
    mode: "development",

    output: {
        filename: "bundle.js",
        path: path.resolve( __dirname, "build" )
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },

    externals: [ webpackNodeExternals() ]
}