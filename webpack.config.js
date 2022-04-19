const path = require('path')

module.exports = {
    mode: 'development',
    entry: './scr/index.js', //may need two period the first part
    output: {
        path: path.resolve(_dirname, 'dist'),
        filename: 'bundle.js'
    },
    watch: true
}