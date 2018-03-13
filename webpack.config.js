const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: {
    app: './src/js/index.js',
    vendor: './src/js/vendor.js'
  },
  output: {
    filename: 'dist/js/[name].js',
    publicPath: '../../'
  },
  module: {
    rules: [
      { // STYE LOADERS
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'postcss-loader', 'sass-loader'],
        })
      },
      { // JS LOADERS
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      },
      { // URL LOADER, IMAGE FILES
        test: /\.(jpe?g|png|svg)/,
        loader: 'url-loader?limit=10000&name=dist/img/[name].[ext]', //if < 10 kb, base64 encode img to css
      },
      { // URL LOADER, FONTS
        test: /\.(woff|woff2|eot|ttf)/,
        loader: 'url-loader?limit=10000&name=dist/fonts/[name].[ext]', //font files to './dist/fonts/**.'
      },
      /*{ // FILE-LOADER
        test: /\.woff|woff2|eot|ttf|svg|jpe?g|png/,
        loader: 'file-loader',
        options: {
          name: 'dist/img/[name].[ext]',
          publicPath: function(url) {
            return url.replace(/dist/, '..')
          },
        },
      },*/
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'dist/css/style.css',
      allChunks: true,
    }),
    new BrowserSyncPlugin({
      notify: false, // hide the notification
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost/bem-webpack-boiler',
      files: [
            '**/*.html'
        ]
    })
  ],
};