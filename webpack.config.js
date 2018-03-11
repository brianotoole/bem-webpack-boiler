const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: ['./src/js/index.js', './src/scss/style.scss'],
  output: {
    filename: 'dist/js/bundle.js'
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
      }
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