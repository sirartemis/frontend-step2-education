const {
  webpack = require('webpack'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  paths = require('./paths'),
} = {};

module.exports = {
  //Where webpack looks to start building the bundle
  entry: [paths.src + '/index.js'],

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
    clean: true,
  },

  // Customize the webpack build process
  plugins: [
    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      "window.jQuery": 'jquery',
    }),

    // Generates HTML files from a template
    new HtmlWebpackPlugin({
      title: 'TOXIN',
      favicon: paths.src + '/assets/img/logo.svg',
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // Images: Copy image files to build folder
      { 
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i, 
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext]',
        }
      },

      // Fonts and SVGs: inline files
      { 
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash][ext]',
        },
      },

      // Javascript: Use Babel to transpile Javascript files
      // Also Babel allows to preprocessing and templating HTML by JSX pragma's
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
    ],
  },

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js','.jsx','.json'],
    alias: {
      '@': paths.src,
      createElement: 'utils/create-element',
      assets: paths.public,
      utils: '@/utils',
      blocks: '@/components/blocks',
      styles: '@/styles',
    },
  },
}
