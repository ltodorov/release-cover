const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
    entry: "./src/app.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "",
        clean: true
    },
    module: {
        rules: [{
            test: /\.(png|jpe?g|gif|svg|webp)$/i,
            exclude: /node_modules/,
            type: "asset/resource"
        }, {
            test: /\.tsx?$/i,
            exclude: /node_modules/,
            use: [{
                loader: "ts-loader",
                options: {
                    transpileOnly: true
                }
            }]
        }, {
            test: /\.html$/i,
            exclude: /node_modules/,
            use: "html-loader"
        }, {
            test: /\.css$/i,
            exclude: /node_modules/,
            use: ["style-loader", "css-loader"]
        }]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            favicon: "./src/favicon.ico"
        })
    ]
};