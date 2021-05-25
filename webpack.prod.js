const HtmlWebpackPlugin = require('html-webpack-plugin'); //html generavimo pluginas.
const path = require('path');

const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'production',
    target: 'web',
    entry: {
        //nurodom musu programos pagrindini js faila , is cia viskas bus paimta
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: 'images/[name][ext]',
    },

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
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new HtmlWebpackPlugin({
            template: './src/html/template.html',
            templateParameters: {
                title: 'We now know Webpack.',
                mainTitle: 'This is easy',
            },
            minify: { removeComments: true, collapseWhitespace: false },
        }),
    ],
    optimization: {
        minimizer: [new CssMinimizerPlugin()],
    },
};
