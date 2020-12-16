// const path = require('path');

// module.exports = {
//     mode: 'none',
//     entry: {
//         app: path.join(__dirname, 'src', 'index.tsx')
//     },
//     target: 'web',
//     resolve: {
//         extensions: ['.ts', '.tsx', '.js']
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.tsx?$/,
//                 use: 'ts-loader',
//                 exclude: '/node_modules/'
//             }
//         ],
//     },
//     output: {
//         filename: '[name].js',
//         path: path.resolve(__dirname, 'dist')
//     }
// }


module.exports = function(env) {
    return require(`./config/webpack.${Object.keys(env)[0]}.js`)
  }