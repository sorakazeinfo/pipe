module.exports = {
  entry: "./src/js/pipe.ts",
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
