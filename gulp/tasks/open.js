// =========================================================
// Gulp Task: Deploy
// =========================================================
let folder      = __dirname.replace(/\\gulp\\tasks/g,''),
	projectName = folder.replace(/.*\\([^\\]+)\\/gm, '').replace('_', '-'),
	ftpData     = require('../settings/ftp.json');

module.exports = function(gulp, plugins) {
	return () => {
		return gulp.src(__filename)
				   .pipe(plugins.open({
					   uri: `http://${projectName}.${ftpData.domain}/`
					}));
	};
};