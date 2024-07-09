const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// 输入entry， 配置处理, 后处理，输出output

module.exports = {
  // 设置入口文件
  entry: './src/main.js',
  // 指定打包后的输出位置和文件名
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  // 设置模式：开发模式
  mode: 'development',
  // 设置开发服务器
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ],
  module: {
    rules: [
      {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
    },
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        // 本地建议使用style-loader
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  }
};
