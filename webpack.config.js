import path from 'path';
import dotenv from 'dotenv';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpackEnvs from './tools/webpack_envs';

dotenv.load({ silent: true });

const devConfig = {
  noInfo: false,
  devtool: 'cheap-module-eval-source-map',
  target: 'web',
  debug: true,
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/styles.scss',
    './src/index',
  ],
  output: {
    path: path.resolve('public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({ 'process.env': webpackEnvs.development }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        include: path.resolve('src'),
      },
      {
        test: /\.s[ac]ss$/,
        loaders: [
          'style',
          'css?sourceMap=true',
          'sass?sourceMap=true',
        ],
        exclude: /node_modules|lib/,
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url?prefix=font/&limit=5000',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml',
      },
      {
        test: /\.(woff2?|ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file?emitFile=false',
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'url-loader', // Using url loader allows relative file paths when using the "url("<path>")" css property.
          // 'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack',
        ],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  imageWebpackLoader: {
    mozjpeg: {
      quality: 65,
    },
    pngquant: {
      quality: '65-90',
      speed: 4,
    },
    svgo: {
      plugins: [
        {
          removeViewBox: false,
        },
        {
          removeEmptyAttrs: false,
        },
      ],
    },
  },
};
// -----------------------------------------------------------------------------
// NOTE : Production Webpack configuration below.

const prodConfig = {
  debug: false,
  devtool: 'source-map',
  noInfo: true,
  target: 'web',
  entry: [
    './src/styles.scss',
    './src/index.js',
  ],
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: 'bundle.js',
    // filename: '/[name]-[hash].min.js',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({ 'process.env': webpackEnvs.production }),
    new ExtractTextPlugin('/styles.min.css', {
      allChunks: true,
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        include: path.resolve('src'),
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.s[ac]ss$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules$importLoaders=1&localIdentName=[name]_[local]!sass'),
        exclude: /node_modules|lib/,
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url?prefix=font/&limit=5000',
      },
      {
        test: /\.tff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml',
      },
      {
        test: /\.(woff2?|ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file?emitFile=false',
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack',
        ],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  imageWebpackLoader: {
    mozjpeg: {
      quality: 65,
    },
    pngquant: {
      quality: '65-90',
      speed: 4,
    },
    svgo: {
      plugins: [
        {
          removeViewBox: false,
        },
        {
          removeEmptyAttrs: false,
        },
      ],
    },
  },
};
console.log(process.env.NODE_ENV);
export default (process.env.NODE_ENV === 'production') ? prodConfig : devConfig;
