const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH_SRC = __dirname + '/src';

module.exports = {
  entry: PATH_SRC + '/App.jsx',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.[hash].js',
  },
  devServer: {
    hot: true,
    inline: true,
    host: '0.0.0.0',
    port: '8080',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Todos',
      template: PATH_SRC + '/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        },
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          },
        ],
      },
      {
        test: /\.(jpg|png|svg|git)$/,
        loader: 'url-loader',
      }
    ],
  }
}




