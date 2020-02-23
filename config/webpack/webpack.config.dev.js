const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry:{
        index:path.resolve(__dirname,'./../../example/index.tsx'),
    },
    output: {
        // 输出地址
        path:path.resolve(__dirname,'./../../dist/lib'),
        // 输出文件名称,保留8位hash值（无法实现前端静态资源在浏览器上长缓存）
        filename: '[name].[hash:8].js',
        // 通用模块定义
        libraryTarget: "umd", 
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            // 添加页面标题
            title: 'eye-react',
            minify: {
                // 移除HTML中的注释
                removeComments: true,   
                // 删除空白符与换行符    
                collapseWhitespace: true,  
                // 压缩内联css 
                minifyCSS: true             
            },
            template: path.resolve(__dirname,'./../../example/index.html')
        }),
    ],
    devServer: {
        // 服务器从哪里提供内容
        contentBase: path.join(__dirname, "dist"),
        // 启用压缩
        compress: true,
        // 服务端口
        port: 9000,
        // 服务启动自动打开浏览器
        open:true
    }
}
