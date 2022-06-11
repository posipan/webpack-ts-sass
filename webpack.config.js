const path = require('path');

// 追加
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './src/ts/index.ts',
  },

  output: {
    path: path.join(__dirname, 'public/dist'),
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
      // 追加
      {
        test: /\.(scss|sass|css)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },

  // 追加
  // webpackの機能拡張
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css', // アウトプットCSSファイル
    }),
  ],

  // 追加
  // ソースマップの作成
  devtool: 'source-map',

  devServer: {
    static: {
      directory: path.join(__dirname, 'public/dist'),
    },
    port: 9000,
  },

  watchOptions: {
    ignored: /node_modules/,
  },
};
