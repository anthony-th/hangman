const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    watchFiles: path.join(__dirname, 'src'),
    port: 3000,
    open: true,
    hot: true,
  },
});
