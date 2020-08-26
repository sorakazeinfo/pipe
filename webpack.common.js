module.exports = {
  entry: "./src/js/pipe.js",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
      }
    ]
  },
  resolve: {
	extensions: [".ts", ".js"]
  }
};
