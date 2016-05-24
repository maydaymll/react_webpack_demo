var path = require("path");

module.exports = {
	entry: path.resolve(__dirname, "static/src/app.js"),
	output: {
		path: path.resolve(__dirname, "static/dist"),
		filename: 'bundle.js'
	}
};