const path = require('path');

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
    ],
  },

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
