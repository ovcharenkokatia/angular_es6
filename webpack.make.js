'use strict';

var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function makeWebpackConfig (options) {
  var BUILD = !!options.BUILD;
  var TEST = !!options.TEST;

  var config = {};
  if (TEST) {
    config.entry = {};
    config.output = {}
  } else {
    config.entry = {
      app: './src/app.js'
    };
    config.output = {
      path: __dirname + '/public',
      publicPath: 'http://localhost:8080/',
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js'
    }
  }

  if (TEST) {
    config.devtool = 'inline-source-map';
  } else if (BUILD) {
    config.devtool = 'source-map';
  } else {
    config.devtool = 'eval';
  }

  config.module = {
    preLoaders: [],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file'
      },
      {
        test: /\.html$/,
        loader: 'raw'
      },
      {
        test: /\.(css|scss)$/,
        loader: 'style!css!sass'
      }
    ]
  };

  if (TEST) {
    config.module.preLoaders.push({
      test: /\.js$/,
      exclude: [
        /node_modules/,
        /\.test\.js$/
      ],
      loader: 'isparta-instrumenter'
    })
  }
  var cssLoader = {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
  };
  if (TEST) {
    cssLoader.loader = 'null'
  }

  config.module.loaders.push(cssLoader);

  config.postcss = [
    autoprefixer({
      browsers: ['last 2 version']
    })
  ];

  config.plugins = [
    new ExtractTextPlugin('[name].[hash].css', {
      disable: !BUILD || TEST
    })
  ];

  if (!TEST) {
    config.plugins.push(
      new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body'
      })
    )
  }

  if (BUILD) {
    config.plugins.push(
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.DedupePlugin(),

      new webpack.optimize.UglifyJsPlugin()
    )
  }

  config.devServer = {
    contentBase: './public',
    stats: {
      modules: false,
      cached: false,
      colors: true,
      chunk: false
    }
  };

  return config;
}