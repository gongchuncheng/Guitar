var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  noInfo: true,
  proxy: {
    '/api/*': {
      target: 'http://localhost:8080',
      host: 'http://localhost:8080',
      secure: false
    }
  },
  historyApiFallback: true,
  stats: { colors: true }
}).listen(4000, '0.0.0.0', function (err, result) {
  if (err) {
    return console.log(err + 111);
  }
  console.log('Listening at http://localhost:4000/');
});