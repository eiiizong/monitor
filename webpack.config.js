const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const fileVersion = new Date().getTime()

module.exports = {
  entry: {
    monitorjs: [path.resolve(__dirname, './src/montiorjs.js')],
  },
  output: {
    publicPath: '',
    path: path.resolve(__dirname, './dist'), // 打包后的文件存放的地方
    filename: '[name].min.js', // 打包后输出文件的文件名
    chunkFilename: '[name].min.js',
    library: 'monitorjs', // 类库名称
    libraryTarget: 'umd', // 指定输出格式
    umdNamedDefine: true, // 会对UMD的构建过程中的AMD模块进行命名，否则就使用匿名的 define
  },
  devServer: {
    hot: true,
  },
  resolve: {
    extensions: ['.js'], // 自动解析确定的扩展
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-transform-runtime',
              // 指定corejs版本 2 仅支持全局变量，如Promise等 3 还支持实例属性，包括includes等
              //   { corejs: 3 },
            ],
          },
        },
      },
    ],
  },
  optimization: {
    minimize: true, // 可省略，默认最优配置：生产环境，压缩 true。开发环境，不压缩 false
    minimizer: [
      new TerserPlugin({
        parallel: true, // 可省略，默认开启并行
        terserOptions: {
          toplevel: true, // 最高级别，删除无用代码
          ie8: true,
          safari10: true,
        },
      }),
    ],
  },
  plugins: [
    // 用于删除/清理构建文件夹的 webpack 插件
    new CleanWebpackPlugin(),

    //  DefinePlugin 在 编译时 将你代码中的变量替换为其他值或表达式
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
      fileVersion, // 文件版本
    }),
  ],
}
