const path = require('path');
const webpack = require('webpack');
module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),  // New
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader : 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
};