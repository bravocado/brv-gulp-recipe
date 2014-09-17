var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var handleErrors = require('../util/handleErrors');

gulp.task('sass', ['images'], function () {
  return gulp.src('build/sass/**/*.{sass, scss}')
    .pipe(sass({
      compass: false,
      bundleExec: true,
      loadPath: 'node_modules/npm-anila/scss/'
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest('dist/css'));
});