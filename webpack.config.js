path = require("path");

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'index_bundle.js',
    path: path.resolve(__dirname, 'resources/public/js'),
  }
};
