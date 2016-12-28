module.exports = {
  entry: './src/index.js',
  output: {
      path: _dirname + '/public',
      filename: 'bundle.js'
  },
  module: {
    loaders [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};
