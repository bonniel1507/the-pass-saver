const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js', //may need two period the first part
    output: {
        path: path.resolve(_dirname, 'dist'),
        filename: 'bundle.js'
    },
    watch: true
}


// const path = require('path');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//   },
//   mode: 'development'
// };