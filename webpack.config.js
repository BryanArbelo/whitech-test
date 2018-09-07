const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let webpackSettings = {
  entry: './app/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  plugins:[
    new HtmlWebpackPlugin({
      inject: true,
      template: 'app/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    {
      test: /\.scss$/,
      use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
      ]
  }, {
    test: /\.css$/,
    use:['style-loader','css-loader']
},   {
  test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
  exclude: /(\/images)/,
  use: 'file-loader'
}, {
  test: /\.(jpg|png|gif|ico)$/,
  use: 'file-loader'
}]
  },
  resolve: {
    modules: [
      'app', 'node_modules'
    ],
    extensions: [
      '.js'
    ],
    mainFields: ['browser', 'jsnext:main', 'main']
  },
};

if (process.env.NODE_ENV != 'production'){
  webpackSettings.devtool = 'eval-source-map';
}
module.exports = webpackSettings;
