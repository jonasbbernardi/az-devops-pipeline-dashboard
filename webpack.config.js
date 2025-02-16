const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = false;
const path = require('path');

const config = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
          test: /\.scss$/,
          use: ["style-loader","css-loader","sass-loader"]
      },
      // {
      //   test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      //   use: 'file-loader'
      // }
    ]
  },
  ignoreWarnings: [
    {module: /node_modules\/sass-loader/}
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'assets'),
    },
    compress: true,
    port: 9000,
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  }
};
config.plugins = config.plugins.concat(devMode ? [] : [new MiniCssExtractPlugin()]);
module.exports = config;