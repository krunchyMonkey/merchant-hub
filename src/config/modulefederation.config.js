/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
const path = require('path');
const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { ModuleFederationPlugin } = webpack.container;
// eslint-disable-next-line import/no-self-import
const mods = require('./modulefederation.config');

const ENV = process.env.npm_lifecycle_event;
const isProd = ENV && ENV.startsWith('build');

module.exports = {
  name: mods.name,
  entry: {
    app: path.resolve(process.cwd(), './src/index.ts'),
  },
  output: {
    path: path.resolve(process.cwd(), './build/'),
    filename: `${mods.name}.[contenthash].bundle.js` || '[name].bundle.[contenthash].js',
    chunkFilename: 'chunk.[id].js',
    publicPath: 'auto',
    clean: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: mods.name,
      filename: 'remoteEntry.js',
      exposes: mods.exposes,
      shared: mods.shared,
    }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(js|ts)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: /src/,
        sideEffects: false,
        options: {
          presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }], '@babel/preset-typescript'],
          plugins: [
            '@babel/transform-runtime',
          ],
        },
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'source-map-loader',
      },
      {
        test: /\.s?[ac]ss$/i,
        use: [
          isProd
            ? MiniCssExtractPlugin.loader
            : 'style-loader', 'css-loader', 'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png',
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    plugins: [
      // this auto-populates webpack aliases from the tsconfig paths
      new TsconfigPathsPlugin({
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
        configFile: path.resolve(process.cwd(), 'tsconfig.json'),
      }),
    ],
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
  },
};
