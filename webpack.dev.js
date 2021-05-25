const HtmlWebpackPlugin = require('html-webpack-plugin'); //html generavimo pluginas.
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
    mode: 'development',
    plugins: [
        new ImageMinimizerPlugin({
            minimizerOptions: {
                plugins: [
                    ['imagemin-webp'],
                    ['mozjpeg', { quality: 50 }],
                    ['gifsicle'],
                    ['pngquant'],
                    ['imagemin-svgo'],
                ],
            },
        }),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/html/template.html',
            templateParameters: {
                title: 'We now know Webpack.',
                mainTitle: 'This is easy',
            },
            minify: { removeComments: true, collapseWhitespace: false },
        }),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: 'images/[name][ext]',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 5000,
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
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, //taspats ieskosim js failu, isskyrus(exlude) node_modules faile
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'], //kiek daug atgal i praeiti mes norim sugrizti(kad veiktu ant senu narsykliu)
                    },
                },
            },
        ],
    },
};
