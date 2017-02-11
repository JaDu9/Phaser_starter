module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'app.bundle.js',
    path:'./dest'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
