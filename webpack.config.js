const path = require('path');
const BUILD_DIR = path.resolve(__dirname, './public/build');
const APP_DIR = path.resolve(__dirname, './client');

module.exports = {
  entry: {
    main: APP_DIR + '/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    proxy: {
        '/': 'http://localhost:5000/',
      },
      /**
     * proxy is required in order to make api calls to
     * express server while using hot-reload webpack server
     * routes api fetch requests from localhost:8080/api/* (webpack dev server)
     * to localhost:3000/api/* (where our Express server is running)
     */
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react']
          }
        }
      },
      
    ]
  }
  
}