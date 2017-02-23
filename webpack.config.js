module.exports = {
	devtool: 'eval-source-map',//生成Source Maps,这里选择eval-source-map
  entry:  "./app/main.js",//已多次提及的唯一入口文件
  output: {
    path: "./public/",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  resolve: {
    //  第一项空字符串必不可少，否则报模块错误
     extensions: ['','.js','.jsx','styl']
},
module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: "babel-loader",
      exclude: '/node_modules/',
                 query: {//具体的编译的类型，
                compact: false,//表示不压缩
                presets: ['es2015','react']//我们需要编译的是es6和react
            }
    }]
  }
}