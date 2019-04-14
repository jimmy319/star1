const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const AmpReactRendererPlugin = require('amp-react-renderer-plugin')

module.exports = {
  mode: 'production',
  entry: {
    page1: [
      path.resolve(__dirname, './src/styles/global.css'),
      path.resolve(__dirname, './src/components/Page1.js')
    ],
    page2: [
      path.resolve(__dirname, './src/styles/global.css'),
      path.resolve(__dirname, './src/components/Page2.js')
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'bundle')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            query: {
              minimize: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new AmpReactRendererPlugin()
  ]
}
