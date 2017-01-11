const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const serverConfig = require('universal-webpack').serverConfiguration;

const config = {
    target: 'node',
    context: path.resolve(__dirname),
    entry: './index.ts',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                ],
            },
            { test: /\.css$/, loader: ExtractTextPlugin.extract({
                fallbackLoader: "style-loader",
                loader: "css-loader"
            }) }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};

module.exports = serverConfig(config, {
    server: {
        input: './index.js',
        output: './server.js',
    },
});