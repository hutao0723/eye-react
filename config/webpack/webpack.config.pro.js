const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 

module.exports = {
    mode: 'production',
    entry:{
        index:path.resolve(__dirname,'./../../lib/index.ts'),
    },
    output: {
        // 输出地址
        path:path.resolve(__dirname,'./../../dist/lib'),
        filename: '[name].js',
        // 通用模块定义
        libraryTarget: "umd", 
    },
    optimization: {
        // 开启代码压缩
        minimize: true
    },
    //devtool:"cheap-module-eval-source-map",
    plugins: [
        // build的时候清空dist文件夹
        new CleanWebpackPlugin(),
    ],
    externals: {
        "react": "react",
        "react-dom": "react-dom"
    }
}