const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: {
    app: './src/js/index.js',
    vendor: './src/js/vendor.js'
  },
  output: {
    filename: 'dist/js/[name].js'
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
      { //URL LOADER FOR IMAGE/FONT FILES
        test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader',
        options: {
          // Images larger than 10 KB won’t be inlined
          limit: 10 * 1024
        }
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