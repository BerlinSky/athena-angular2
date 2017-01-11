var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  target: 'web',
  output: {
    path: helpers.root('dist'),
  //   publicPath: 'http://localhost:8080/',
    ppublicPath: '/',
    // filename: 'bundle.js'
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});


// export default {
//   debug: true,
//   devtool: 'inline-source-map',
//   noInfo: false,
//   entry: [
//     path.resolve(__dirname, 'src/index')
//   ],
//   target: 'web',
//   output: {
//     path: path.resolve(__dirname, 'src'),
//     publicPath: '/',
//     filename: 'bundle.js'
//   },
//   plugins: [],
//   module: {
//     loaders: [
//       { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
//       { test: /\.css$/, loaders: ['style', 'css'] }
//     ]
//   }
// }
