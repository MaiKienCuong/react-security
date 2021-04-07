const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const defaults = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, './src'),
		filename: 'bundle.js',
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components|public)/,
			loader: "babel-loader"
		}],
	},
	resolve: {
		modules: [path.resolve(__dirname, "./src"), "node_modules"],
		extensions: ['*', '.js', '.jsx'],
	},
	plugins: [
		// Avoid publishing files when compilation fails
		//new webpack.NoErrorsPlugin(),
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery',
			'window.jQuery': 'jquery',
		}),
		// new HtmlWebpackPlugin({
		//   template: path.join(__dirname, './app/index.html'),
		//   filename: 'index.html',
		//   inject: 'body'
		// })
	],
};

module.exports = defaults;
