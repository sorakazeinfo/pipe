const TerserPlugin = require('terser-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: "./src/docs.js",
  output: {
    path: `${__dirname}/dist`,
    filename: "docs.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
	  {
		test: /\.js$/,
		loader: 'babel-loader',
	  },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  plugins: [new VueLoaderPlugin()],
  devServer: {
	  contentBase: `${__dirname}/dist`
  },
  optimization: {
	  minimizer: [new TerserPlugin({extractComments: false})]
  }
};
