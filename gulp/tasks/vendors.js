// =========================================================
// Gulp Task: vendors
// =========================================================

let path = require("../settings/path.json"),
	merge = require("merge-stream");

module.exports = (gulp, plugins) => {
	return () => {
		let fonts 	= gulp.src(path.src.fonts)
						  .pipe(plugins.newer(path.build.fonts))
						  .pipe(gulp.dest(path.build.fonts)),
			attach 	= gulp.src(path.src.attach)
						  .pipe(plugins.newer(path.build.attach))
						  .pipe(gulp.dest(path.build.attach));

		return merge(fonts, attach);
	};
};