const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
            type: "asset/resource"
        }, {
            test: /\.tsx?$/i,
            use: "ts-loader"
        }, {
            test: /\.html$/i,
            use: "html-loader"
        }, {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"]
        }]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            favicon: "./src/favicon.ico"
        })
    ]
};