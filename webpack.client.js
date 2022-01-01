const path = require("path");

module.exports = {
    target: "node",
    entry: "./src/index.js",
    mode: "development",

    output: {
        filename: "bundle.js",
        path: path.resolve( __dirname, "public" )
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    }
}