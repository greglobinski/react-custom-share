const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'docs-examples/src/index.js'),
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  devServer: {
    port: 3001,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'docs-examples/src/index.html'),
      filename: './index.html',
    }),
  ],
};
