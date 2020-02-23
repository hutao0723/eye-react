
const path = require("path");
const merge = require('webpack-merge');

const baseConfig = {
    resolve: {
        // 依次按后缀名查找
        extensions: [".ts", ".tsx", ".js", ".json"],
        // 配置引入别名
        alias: {
            "@": path.resolve(__dirname, "./lib"),
        }
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            {
                test: /\.less$/, 
                use: [
                    'style-loader', {
                        loader: 'css-loader', 
                        options: {
                            // modules: true 
                        }
                    },
                    'less-loader' // 将 Less 编译为 CSS ]
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
            }              
        ]
    },
}

let pluginConfig = process.env.NODE_ENV == "production"? require('./config/webpack/webpack.config.pro.js'):require('./config/webpack/webpack.config.dev.js');
module.exports = merge( baseConfig, pluginConfig )