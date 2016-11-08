module.exports = {
	entry: {
		example: "./src/example.ts",
		clock: "./src/clock.ts"
	},
	resolve: {
		extensions: ['', '.webpack.js', 'web.js', '.ts', '.js']
	},
	output: {
		path: "./build",
		filename: "[name].bundle.js"	
	},
	module: {
		loaders: [
			{test: /\.ts$/, loader: 'ts-loader'}
		]
	}
}
