module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: './public/js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};