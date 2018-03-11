# BEM Webpack Boiler
A minimalistic boilerplate that follows BEM methodology and organizes assets using an SMACSS approach. It comes with Webpack that includes BrowserSync for auto reloading / proxing a server, Babel for writing ES6-based javascript modules, Autoprefixer for cross-browser compatibility, and uses SCSS as the main loader for styles.

## Getting Started: Installing

### Change Proxy Location
Open `webpack.config.js` file and change the proxy location for BrowserSync to work. On ~line 36:

Change proxy location: "localhost/bem-webpack-boiler"
``` bash
proxy: 'localhost/FOLDERNAME', 
```

### Install NPM Dependencies
``` bash
npm install
```

### Watch Watch files with BrowserSync
This will open up a browser window with local site and watch for file changes. Ex - http://localhost:3000/bem-webpack-boiler

``` bash
npm run-script watch
```

### Packages Included
1. [Autoprefixer](https://www.npmjs.com/package/autoprefixer)
will use the data based on current browser popularity and property support to automatically apply prefixes. This requires the [postcss-loader](https://github.com/postcss/postcss-loader) loader to be installed & used within `webpack.config.js` file. This is already setup and includes the `postcss.config` file needed to work. See the postcss-loader [documentation](https://github.com/postcss/postcss-loader) for dealing with browser support / options.


2. Babel: [babel-core](https://github.com/babel/babel-loader) and [babel-loader](https://github.com/babel/babel-loader) are used with the [Babel-Preset-ES2015](https://www.npmjs.com/package/babel-preset-es2015-webpack) preset. This preset is used to enable code to be written in ES2015 (ES6) and compiled for browser support down to ES5.

3. [BrowserSync](https://www.npmjs.com/package/browser-sync-webpack-plugin): 
This boiler is using BrowserSync to serve the project and Webpack Dev Server is not needed. The setup is pretty easy: just pass the BrowserSync options to the plugin as the first argument within the `webpack.config.js` file.


### Dependencies Included
1. [jQuery](https://www.npmjs.com/package/jquery) is included as dependency to grab/manipulate DOM elements with ease. You are able to use jQuery within any javascript file, by importing `$ from jquery` into the file, like so:
``` javascript 
import $ from 'jquery'; 
```

2. [Lazysizes](https://www.npmjs.com/package/lazysizes) is similar to Lazyload. It is a self-initializing lazyloader for images and still works fine for SEO, since it does not hide images/assets from search engines... No matter what markup pattern you use. This package is included as a dependency. 

To lazyload images, add the class `.lazyload` to all `img` and `iframe` elements, as needed. Instead of a `src` or `srcset` attribute **use a `data-src` or `data-srcset` attribute**. Here's an example:
``` html
<img data-src="image.jpg" class="lazyload" />
```

### TODO
- [ ] Add modernizr / setup basic fallback classes for IE9
- [ ] Add url-loader / setup local images/font paths
- [ ] Add production build script: on run-script 'build prod', compress images + min assets