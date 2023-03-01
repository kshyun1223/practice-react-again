/* eslint-disable no-undef */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // 번들링 파일을 주입하여 번들링 폴더로 복사할 HTML 파일
    }),
  ],
  devServer: { // webpack-dev-server 옵션
    static: path.resolve(__dirname, 'dist'),
    historyApiFallback: true, // 404 페이지 대신 index.html로 이동
    hot: true, // 모듈 전체를 다시 로드하지 않고 변경된 사항만 갱신
  },
  resolve: { // import 할 때 확장자 생략
    extensions: ['.jsx', '.js'],
  },
  module: {
    rules: [
      {
        loader: "babel-loader", // 바벨 로더 추가
        test: /\.(js|jsx|ts|tsx)$/, // 적용할 대상
        exclude: /node_modules/, // 제외할 대상
      },
    ],
  },
};