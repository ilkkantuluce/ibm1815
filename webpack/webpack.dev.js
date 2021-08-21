const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  watch: true,
  stats: { 
    colors: true, 
    warnings: false 
  },
  entry: [
    path.resolve(__dirname, '../src/scripts/app--required.js'),
    path.resolve(__dirname, '../src/scripts/app--optional.js'),
    path.resolve(__dirname, '../src/styles/app--required.scss'),
    path.resolve(__dirname, '../src/styles/app--optional.scss')
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist/scripts'),
    publicPath: 'scripts/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'scripts.html'),
      filename: path.resolve(__dirname, '../src/includes/webpack/scripts.njk'),
      hash: true,
      inject: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'astroturf/loader']
      },
      {
        test: /\.scss/i,
        sideEffects: true,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'fast-sass-loader',
            options: {
              implementation: require('node-sass'),
              includePaths: ['node_modules'],
              data: `
                  $feature-flags: (
                    enable-css-custom-properties: true,
                    grid-columns-16: true,
                  );
                `,
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[contenthash].[ext]',
              outputPath: 'images'
            }
          }
        ]
      }
    ]
  }
};