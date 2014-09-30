var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var critical = require('critical');
var sass = require('gulp-sass');
var handleErrors = require('../util/handleErrors');
var config=require('../config').sass;

gulp.task('sass', ['images', 'copystyles', 'critical'], function () {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
      .pipe(sass({
        cacheLocation: '.sass_cache',
        outputStyle: 'compressed',
        includePaths: ['node_modules/npm-anila/scss/']
      }))
    .pipe(sourcemaps.write('./maps'))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest));
});