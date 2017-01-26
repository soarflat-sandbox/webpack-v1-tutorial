module.exports = {
  // エントリーポイントの設定
  entry: './src/js/app.js',
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'bundle.js',
    // 出力先のパス
    path: './public/js'
  },
  // ローダーの設定
  module: {
    loaders: [{
      // ローダーの処理対象ファイル
      test: /\.js$/,
      // ローダーの処理対象から外すディレクトリ
      exclude: /node_modules/,
      // 利用するローダー
      loader: 'babel-loader?presets[]=es2015'
    }]
  }
};