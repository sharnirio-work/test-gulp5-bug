const { src, dest } = require('gulp');
function defaultTask(cb) {
	return src("img/*.+(jpg|png|svg)")
		.pipe(dest('img-after/'));
	cb();
}

exports.default = defaultTask