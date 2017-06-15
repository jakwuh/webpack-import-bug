const {resolve} = require('path');

module.exports = {
    
    entry: resolve(__dirname, 'actual.js'),
    output: {
        path: resolve(__dirname, 'dist/'),
        filename: 'bundle.js'
    }
    

}