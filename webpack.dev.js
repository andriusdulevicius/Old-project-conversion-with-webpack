const HtmlWebpackPlugin = require('html-webpack-plugin'); // html generavimo pluginas.
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
// webpack lint plugin options
const lintOptions = {
  context: path.resolve(__dirname),
  fix: true,
};

module.exports = {
  mode: 'development',
  target: 'web',
  entry: {
    // nurodom musu programos pagrindini js faila , is cia viskas bus paimta
    main: path.resolve(__dirname, './src/index.js'),
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: 'images/[name][ext]',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // taspats ieskosim js failu, isskyrus(exlude) node_modules faile
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // kiek daug atgal i praeiti mes norim sugrizti(kad veiktu ant senu narsykliu)
          },
        },
      },
    ],
  },
  plugins: [
    new ESLintPlugin(lintOptions),
    new HtmlWebpackPlugin({
      template: './src/html/template.html',
      templateParameters: {
        title: 'We now know Webpack.',
        mainTitle: 'This is easy',
      },
      minify: { removeComments: true, collapseWhitespace: false },
    }),
  ],
};
