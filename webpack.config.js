const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {

  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },

  module: {
    rules: [

      {
        test: /\.scss$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ]
      },

      {
        test: /\.(gif|png|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/img/'
            }
          }
        ]
      },

      {
        test:/\.html$/,
        use: [
          'html-loader'
        ]
      },

    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/nav.html',
      filename: 'nav.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/contact.html',
      filename: 'contact.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/space.html',
      filename: 'space.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/upcoming.html',
      filename: 'upcoming.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/location.html',
      filename: 'location.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/have.html',
      filename: 'have.html'
    }),

  ]

};
