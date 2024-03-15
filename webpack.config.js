const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

// const CopyPlugin = require('copy-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  entry: {
    index:path.resolve(__dirname, 'src', 'pages', 'start','start.js'),
    building:path.resolve(__dirname, 'src', 'pages', 'building', 'building.js'),
    concrete_works:path.resolve(__dirname, 'src', 'pages', 'concrete_works', 'concrete_works.js'),
    drilling:path.resolve(__dirname, 'src', 'pages', 'drilling', 'drilling.js'),
    reconstruction:path.resolve(__dirname, 'src', 'pages', 'reconstruction', 'reconstruction.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: '[name]/[name].[contenthash].js',
    assetModuleFilename: 'assets/[name][ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'pages', 'start', 'start.handlebars'),
      output:'index.html',
      filename:'index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'pages', 'building', 'building.handlebars'),
      output:'building.html',
      filename:'building.html',
      chunks: ['building'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'pages', 'concrete_works', 'concrete_works.handlebars'),
      output:'concrete_works.html',
      filename:'concrete_works.html',
      chunks: ['concrete_works'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'pages', 'drilling', 'drilling.handlebars'),
      output:'drilling.html',
      filename:'drilling.html',
      chunks: ['drilling'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'pages', 'reconstruction', 'reconstruction.handlebars'),
      output:'reconstruction.html',
      filename:'reconstruction.html',
      chunks: ['reconstruction'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name]/[name].[contenthash].css',
    }),  
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')],
              },
            },
          },
          'group-css-media-queries-loader',
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|ttf)?$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
      {
        test: /\.(jpe?g|png|webp|gif|svg)$/i,
        use: devMode
          ? []
          : [
              {
                loader: 'image-webpack-loader',
                options: {
                  mozjpeg: {
                    progressive: true,
                  },
                  optipng: {
                    enabled: false,
                  },
                  pngquant: {
                    quality: [0.65, 0.9],
                    speed: 4,
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                  webp: {
                    quality: 75,
                  },
                },
              },
            ],
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name][ext]',
        },
      },
      {
        test: /\.m?js$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.handlebars$/,
        loader: "handlebars-loader",
        options: {
          helperDirs: path.resolve(__dirname, 'src/helpers'),
          partialDirs: path.resolve(__dirname, 'src/partials')
        }
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(), // Минификация JavaScript
      new CssMinimizerPlugin(), // Минификация CSS
    ],
  },
};
