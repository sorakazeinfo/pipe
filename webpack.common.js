module.exports = {
  entry: "./src/js/pipe.js",
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: [
		  {
		    loader: "babel-loader",
		    options: {
			  presets: [
				"@babel/preset-env"
			  ]
			}
		  }
		]
      }
    ]
  }
};
