const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    monitorjs: [path.resolve(__dirname, './src/index.js')],
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
    watchFiles: ['src/**/*'],
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
            plugins: [['@babel/plugin-transform-runtime', { corejs: 3 }]],
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
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './demo/device.html'),
      scriptLoading: 'blocking',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
