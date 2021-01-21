// =========================================================
// Gulp Task: JS
// =========================================================

let path = require("../settings/path.json"),
	webpackStream = require("webpack-stream");

module.exports = (gulp, plugins, browserSync) => {
	return () => {
		let errorHandler = plugins.notify.onError("<%= error.message %>");
		var reload = browserSync.reload;
		var stream =
			// -------------------------------------------- Start Task
			gulp
				.src(path.src.js)
				.pipe(plugins.plumber({ errorHandler }))
				.pipe(
					webpackStream({
						// mode: 'development',
						mode: 'production',
						
						entry: {
							jQuery:			"./node_modules/jquery/src/jquery.js",
							app: 			"./src/js/app.js",
						},
						output: {
							filename: "[name].js",
						},
						module: {
							rules: [
								{
									test: /\.(js)$/,
									exclude: /(node_modules)/,
									loader: "babel-loader",
									query: {
										presets: ["env"],
									},
								},
							],
						},
						externals: {
							jquery: "jQuery",
						},
						devtool: "source-map",
					})
				)
				.pipe(gulp.dest(path.build.js))
				.pipe(
					reload({
						stream: true,
					})
				);
		// ---------------------------------------------- End Task
		return stream;
	};
};
