var gulp = require('gulp');
var rigger = require('gulp-rigger');
var rimraf = require('gulp-rimraf');

gulp.task('build', function () {
	gulp.src('src/*.js')
		.pipe(rigger())
		.pipe(gulp.dest('dist/'));
});
