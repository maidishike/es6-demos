const path = require('path');
const glob = require('glob');
const fs = require('fs');
const htmlWebpackPlugin = require('html-webpack-plugin');
function resolve (_path) {
  return path.resolve(__dirname, _path);
}
var getEntry = function () {
  var entry = {}, source = path.resolve(__dirname, './source/**/*.js');
  glob.sync(source).forEach(function(name) {
    var n = name.slice(name.lastIndexOf('source/') + 13, name.length - 3);
    entry[n] = name;
    // console.log(entry);
  });
  return entry;
};
var getPlugins = function() {
  var plugins = [], template = path.resolve(__dirname, './source/**/*.html');
  glob.sync(template).forEach(function(name) {
    var n = name.slice(name.lastIndexOf('source/') + 6, name.length),
        template = name.slice(name.lastIndexOf('source/'), name.length),
        chunk = [name.slice(name.lastIndexOf('source/') + 7, name.length - 11)];
    var plugin =  new htmlWebpackPlugin({
      title: 'es6 demo',
      filename: '.' + n,
      template: template,
      inject: 'body',
      chunks: chunk
    });
    plugins.push(plugin);
  });
  return plugins;
};
module.exports = {
  entry: getEntry(),
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'js/[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: getPlugins()
};
