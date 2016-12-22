var webpack = require('webpack'); 
var path = require('path');                //引入node的path库

var env = process.env.NODE_ENV || 'development';

var config = {
  entry: [
    __dirname +'/static/src/scripts/app.js'
  ],                //入口文件
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'static'),  // 指定编译后的代码位置为 dist/bundle.js
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { 
        test: /\.jsx?$/, 
        loader: 'babel', 
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015'] 
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: path.resolve(__dirname, 'static/src')
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'url?limit=25000',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
      }

    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      '__DEV__': env === 'development' ? 'true' : 'false',
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
}

if (env === 'development') {
    config.entry.unshift('webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:4000');
    config.plugins = config.plugins.concat([
        new webpack.HotModuleReplacementPlugin()
    ]);
}

module.exports = config;