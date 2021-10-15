var path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "production",
	entry: "./src/js/app.js",
	devServer: {
		static: {
			directory: path.join(__dirname, "public"),
		},
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "/dist",
	},
	plugins: [new MiniCssExtractPlugin({ filename: "styles.css" })],
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [{ loader: "babel-loader", options: { presets: ["@babel/preset-env"] } }],
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
		],
	},
};
