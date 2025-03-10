const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
  mode,
  target,
  devtool,
  stats:{
    children:true
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    // historyApiFallback: true,
  },
  entry: {
    index:path.resolve(__dirname, 'src', 'pages', 'start','start.js'),
    building:path.resolve(__dirname, 'src', 'pages', 'building', 'building.js'),
    // concrete_works:path.resolve(__dirname, 'src', 'pages', 'concrete_works', 'concrete_works.js'),
    // drilling:path.resolve(__dirname, 'src', 'pages', 'drilling', 'drilling.js'),
    // warehouse:path.resolve(__dirname, 'src', 'pages', 'warehouse', 'warehouse.js'),
    // admin_page:path.resolve(__dirname, 'src', 'pages', 'admin_page', 'admin_page.js'),
    // login:path.resolve(__dirname, 'src', 'pages', 'login', 'login.js'),
    // register:path.resolve(__dirname, 'src', 'pages', 'register', 'register.js'),
    // start_ejs:path.resolve(__dirname, 'src', 'pages', 'start_ejs', 'start_ejs.js'),
    // index:path.resolve(__dirname, 'src', 'pages', 'admin_page', 'admin_page.js'),
    // components:path.resolve(__dirname, 'src', 'pages', 'components', 'components.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: '[name]/[name].[contenthash].js',
    assetModuleFilename: 'assets/[name][ext]',
    // publicPath: '/',
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'pages', 'start', 'start.html'),

      filename:'index.html',
      chunks: ['index'],
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'pages', 'building', 'building.html'),

      filename:'building/index.html',
      chunks: ['building'],
    }),

    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, 'src', 'pages', 'concrete_works', 'concrete_works.html'),

    //   filename:'concrete_works/index.html',
    //   chunks: ['concrete_works'],
    // }),

    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, 'src', 'pages', 'drilling', 'drilling.html'),

    //   filename:'drilling/index.html',
    //   chunks: ['drilling'],
    // }),

    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, 'src', 'pages', 'warehouse', 'warehouse.html'),

    //   filename:'warehouse/index.html',
    //   chunks: ['warehouse'],
    // }),

    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, 'src', 'pages', 'admin_page', 'admin_page.html'),

    //   filename:'admin_page.html',
    //   chunks: ['admin_page'],
    // }),
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, 'src', 'pages', 'login', 'login.html'),

    //   filename:'login.html',
    //   chunks: ['login'],
    // }),
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, 'src', 'pages', 'register', 'register.html'),

    //   filename:'register.html',
    //   chunks: ['register'],
    // }),
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, 'src', 'pages', 'admin_page', 'admin_page.html'),

    //   filename:'index.html',
    //   chunks: ['index'],
    // }),

    // new HtmlWebpackPlugin({
    //     template: path.resolve(__dirname, 'src', 'pages', 'start_ejs', 'start_ejs.ejs'), // Приклад шляху до вашого EJS-шаблону
    //     templateParameters: async () => {
    //       try {
    //         // Виконати запит до бази даних
    //         // const data = await fetchDataFromDatabase();
    //         // const data = {title:'this is title'}
    //         const data = await fetch('https://jsonplaceholder.typicode.com//users')
    //               .then(response => response.json())
      
  
    //         // Повернути об'єкт з даними для використання у шаблоні
    //         return { data };
    //       } catch (error) {
    //         console.error('Помилка під час отримання даних:', error);
    //         return { error: 'Помилка під час отримання даних' };
    //       }
    //     },
    //     output: 'start_ejs.html',
    //     filename: 'start_ejs.html',
    //     chunks: ['start_ejs'],
    // }),

    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, 'src', 'pages', 'components', 'components.html'),
    //   output:'components.html',
    //   filename:'components.html',
    //   chunks: ['components'],
    // }),

    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/img', to: 'assets/img' } // из какой папки копировать и куда
      ]
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
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Используем babel-loader для транспиляции JSX
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // Пресеты для транспиляции JavaScript и JSX
          }
        }
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader',
        options: {
            esModule: false, // Потрібно вимкнути esModule, щоб можна було правильно імпортувати шаблони EJS
        },
      },
      // {
      //   test: /\.handlebars$/,
      //   loader: "handlebars-loader",
      //   options: {
      //     helperDirs: path.resolve(__dirname, 'src/helpers'),
      //     partialDirs:path.resolve(__dirname, 'src/partials')
      //   }
      // },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(), // Мініфікація JavaScript
      new CssMinimizerPlugin(), // Мініфікація CSS
    ],
  },
};
