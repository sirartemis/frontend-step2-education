const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const fs = require("fs");

const PATHS = {
	src: path.join(__dirname, './src'),
	dist: path.join(__dirname, './dist'),
	assets: 'assets/'
}

const PAGES_DIR = `${PATHS.src}/pages/`;
const PAGES = fs.readdirSync(PAGES_DIR).filter(filename => filename.endsWith('.pug'));

const config = {
  externals: {
    path: PATHS
  },
  entry: {
    index: `${PATHS.src}/index.js`,
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jquery': 'jquery'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    ),
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: `${PATHS.dist}`,
    clean: true,
  },
  resolve: { extensions: ["*",".js",".jsx"] },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
          plugins: [
            ["@babel/plugin-transform-react-jsx", { "pragma": "createElement", "pragmaFrag": "'fragment'" }]
          ],
        }
      },
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name:"styles",
          type:"css/mini-extract",
          chunks: "all",
          enforce: true,
        },
      },
    },
  }
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
  new MiniCssExtractPlugin()
  );
  config.module.rules.push({
    test: /\.((c|sa|sc)ss)$/i,
    use:[
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      'sass-loader'
    ],
  })
} else {

  config.module.rules.push({
    test: /\.((c|sa|sc)ss)$/i,
    use:[
      'style-loader',
      'css-loader',
      'postcss-loader',
      'sass-loader'
    ],
  });

  config.devServer = {
    static: `${PATHS.dist}`,
  }

}

module.exports = config;
