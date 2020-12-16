const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


const ROOT = path.resolve(__dirname, '..');
console.log('@@@@@@@@@ USING PRODUCTION @@@@@@@@@@@@@@@');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    target: 'web',
    entry: {
        app: path.join(__dirname, '../src', 'index.tsx')
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js',
        path: path.resolve(__dirname, '../dist/')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  MiniCssExtractPlugin.loader,
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
              {
                test: /\.(png|jpg|gif|woff|woff2|ttf|svg|eot)$/,
                exclude: /node_modules/,
                use: 'file-loader?name=assets/[name]-[hash:6].[ext]'
              },
              {
                test: /favicon.ico$/,
                use: 'file-loader?name=/[name].[ext]'
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "../public", "index.html"),
          favicon: './public/favicon.ico'
        }),
        new MiniCssExtractPlugin({    
          filename: '[name].css',
          chunkFilename: '[id].css'
        })
      ],
      optimization: {
        minimize: true,
        minimizer: [
          // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
          // `...`,
          new CssMinimizerPlugin(),
        ],
      },
}

