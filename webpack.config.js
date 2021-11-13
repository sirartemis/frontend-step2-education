const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PATHS = {
	src: path.join(__dirname, './src'),
	dist: path.join(__dirname, './dist'),
	assets: 'assets/'
}

const PAGES_DIR = `${PATHS.src}/pages/`;
const PAGES = fs.readdirSync(PAGES_DIR).filter(filename => filename.endsWith('.pug'));

const config = {
  mode: 'development',
  externals: {
    path: PATHS
  },
  entry: {
    index: `${PATHS.src}/index.js`,
  },
  plugins: [
    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`
    })),
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
    static: `${PATHS.src}`
  }
};

module.exports = config;
