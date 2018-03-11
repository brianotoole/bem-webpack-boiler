# BEM Webpack Boiler
A minimalistic boilerplate that follows BEM methodology and organizes assets using an SMACSS approach. It comes with Webpack that includes BrowserSync for auto reloading / proxing a server and Babel for writing ES6-based javascript modules. JQuery is also included.

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