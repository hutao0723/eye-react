const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 

module.exports = {
    mode: 'production',
    entry:{
        index:path.resolve(__dirname,'./../../lib/index.ts'),
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
        "react": "React",
        "react-dom": "ReactDOM"
    }
}