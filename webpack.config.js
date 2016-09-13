"use strict"
var webpack = require('webpack')
var path = require('path')
var CopyWebpackPlugin = require('copy-webpack-plugin')

const HOST = process.env.HOST || "0.0.0.0"
const PORT = process.env.PORT || "8888"

module.exports = {
	entry: [
		`webpack-dev-server/client?http://${HOST}:${PORT}`, // WebpackDevServer host and port
		`webpack/hot/only-dev-server`,
		`./getting-started/index.jsx` // Your appʼs entry point
	],
	devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
    loaders: [
    {
  		test: /\.jsx?$/,
  		exclude: /(node_modules)/,
  		loaders: ['react-hot', 'babel'],
    }],
  },
	devServer: {
		contentBase: "./public",
		noInfo: true, //  --no-info option
		hot: true,
		inline: true,
		port: PORT,
		host: HOST,
		historyApiFallback: true
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new CopyWebpackPlugin([
			{from: './index.html'}
		]),
	]
}



