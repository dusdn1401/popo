
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index:['babel-polyfill','./popo/js/index_dev.js']
  },
  output: {
    path: path.resolve(__dirname, 'popo/js'),
    filename: '[name].js'
  },
  plugins:[
    // new HtmlWebPackPlugin({
    //   template:path.join(__dirname,'./src/index.html'),
    //   inject:true,
    //   filename:path.join(__dirname,'./dist/index.html')
    // })
  ],
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  mode: 'development'
};