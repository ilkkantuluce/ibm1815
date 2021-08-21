const dev = require('./webpack.dev.js');
const merge = require('webpack-merge');
const Visualizer = require('webpack-visualizer-plugin');

module.exports = merge(dev, {
  mode: 'production',
  watch: false,
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all'
    }
  },
  output: { filename: '[hash].js' },
	// plugins: [new Visualizer({
	// 	filename: '/stats.html'
	// })],
});