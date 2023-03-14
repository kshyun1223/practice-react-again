const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack')

module.exports = {
  entry: `${path.resolve(__dirname, './src')}/index.tsx`,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(css)$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/asset/favicon.ico',
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs'),
  },
  
  devServer: { // webpack-dev-server 옵션
    static: path.resolve(__dirname, 'docs'),
    historyApiFallback: true, // 404 페이지 대신 index.html로 이동
    hot: true, // 모듈 전체를 다시 로드하지 않고 변경된 사항만 갱신
  },

  resolve: { // import 할 때 확장자 생략
    extensions: ['.jsx', '.js','.ts','.tsx'],
  },
};