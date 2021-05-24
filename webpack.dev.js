const HtmlWebpackPlugin = require('html-webpack-plugin'); //html generavimo pluginas.
const path = require('path');

module.exports = {
    mode: 'development',
    plugins: [
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
    },
};
