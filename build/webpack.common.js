const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const webpack = require('webpack')

function assetsPath (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? 'static'
    : 'static'
  return path.posix.join(assetsSubDirectory, _path)
}

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve("./dist"),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.json', 'css'],
    alias: {
      "@": path.resolve(__dirname, "..", "src"),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.s(a|c)ss$/,
        use: [{
          loader: "style-loader",
        },{
          loader: "css-loader"
        },{
          loader: "sass-loader"
        }]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),
  ]
}