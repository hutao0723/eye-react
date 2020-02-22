
const path = require("path");
const merge = require('webpack-merge');

const baseConfig = {
    output: {
        // 输出地址
        path:path.resolve(__dirname,'./dist/lib'),
        // 输出文件名称,保留8位hash值（无法实现前端静态资源在浏览器上长缓存）
        filename: '[name].[hash:8].js',
        // 通用模块定义
        libraryTarget: "umd", 
    },
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