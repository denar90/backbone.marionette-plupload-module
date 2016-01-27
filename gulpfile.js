var gulp = require('gulp');
var rigger = require('gulp-rigger');
var clean = require('gulp-clean');

gulp.task('build', function () {
	gulp.src('src/*.js')
		.pipe(clean())
		.pipe(rigger())
		.pipe(gulp.dest('dist/'));
});
