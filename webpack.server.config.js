const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = function(options) {
  const config = {
    mode: "development",

    resolve: {
      extensions: [".js", ".jsx", ".less"],
      alias: {
        'components': path.resolve(__dirname, "./src/components"),
        'pages': path.resolve(__dirname, "./src/pages"),
        'utils': path.resolve(__dirname, "./src/utils")
      }
    },

    entry: {
      index: path.resolve(__dirname, "./src/index.js")
    },

    output: {
      path: path.resolve(__dirname, "./build"),
      filename: "[name].js",
      chunkFilename: "[name].js"
    },

    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }, {
        test: /\.(css|less)$/,
        use: [{
          loader: CssExtractPlugin.loader
        }, {
          loader: "css-loader"
        }, {
          loader: "postcss-loader"
        }, {
          loader: "less-loader"
        }]
      }, {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: "url-loader",
        options: {
          limit: 8000
        }
      }]
    },

    plugins: [
      new CssExtractPlugin({
        filename: "style.css",
        chunkFilename: "[name].css"
      }),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: path.resolve(__dirname, "./src/statics/template.html"),
        inject: true
      })
    ]

    // optimization: {
    //   minimizer: {
    //     new OptimizeCSSAssetsPlugin({}),
    //     new UglifyJsPlugin()
    //   }
    // }
  };

  return config;
};