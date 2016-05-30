var path = require("path");

module.exports = {
	entry: path.resolve(__dirname, "app/app.js"),
	output: {
		path: path.resolve(__dirname, "build"),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'url-loader?limit=8192' //用base64编码<=8k的图片
			},
			{
				test: /\.css$/,
				loader: 'style!css'
			}
		]
	}
};