const { resolve } = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //将css抽离为独立css文件
const htmlWebpackPlugin = require("html-webpack-plugin"); //在打包结束后，自动生成一个html文件，并把打包生成的js模块引入到该html中

module.exports = {
  src: '../src', 
  views: '../src/pages', //html模板目录
  // publicPath: 'assets/', //静态资源服务器
  output:{ //出口配置项
    dev: resolve(__dirname, '../devDist'), //开发环境打包出口
    pro: resolve(__dirname, '../proDist'), //生产环境打包出口
  }, 
  devServer: { //webpack-dev-server 服务配置项
    contentBase: resolve(__dirname, '../devDist'), //设置 webpack-dev-server 服务器的启动路径
    open: true, //自动打开浏览器窗口
    openPage: 'pages/index.html', //服务器启动后开启的页面
    index: 'pages/index.html', //服务器启动后开启的页面
    port : 8088, //启动服务器的窗口
    // hot: true, //任何情况下都不刷新窗口
    // hotOnly: true, //强制浏览器不会刷新
    proxy: { //代理后端服务器
      "/": {
        target: "http://localhost:9092"
      }
    }
  },
  rules: [ //loader扩展配置项
    {
      test: /\.less$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
      include: resolve(__dirname, '../src'), //指定目标文件夹，缩小搜索范围
    }
  ],
  devPlugins:[], //用于开发环境的插件
  proPlugins:[
    new htmlWebpackPlugin({ //用于生产环境部署后页面跳转
      filename: `index.html`,
      template: './src/index.html',
      chunks: [], 
      inject: true, 
    })
  ], //用于生成环境的插件
}