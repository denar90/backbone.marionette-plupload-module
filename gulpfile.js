var gulp = require('gulp');
var rigger = require('gulp-rigger');

gulp.task('default', function () {
	gulp.src('src/*.js')
		.pipe(rigger())
		.pipe(gulp.dest('dist/'));
});
