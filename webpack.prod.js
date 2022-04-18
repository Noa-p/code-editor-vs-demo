const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { resolve } = require('path')
const glob = require('glob-all')
const PurgeCSSPlugin = require('purgecss-webpack-plugin')
const { PROJECT_PATH } = require('./constants')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    // new PurgeCSSPlugin({
    //   paths: glob.sync([
    //     `${resolve(PROJECT_PATH, './src')}/**/*.{tsx,scss,less,css}`,
    //     `${resolve(PROJECT_PATH, './src')}/*.{tsx,scss,less,css}`
    //   ]),
    //   safelist: ['html', 'body', 'a']
    // }),
    new webpack.BannerPlugin({
      raw: true,
      banner: '/** @preserve Powered by h */',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
      ignoreOrder: false,
    }),
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'server',					// 开一个本地服务查看报告
    //   analyzerHost: '127.0.0.1',			// host 设置
    //   analyzerPort: 8888,							// 端口号设置
    // }),
  ],
})
