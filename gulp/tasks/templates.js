var gulp = require('gulp');
var jade = require('gulp-jade');
var config = require('../config').templates;

gulp.task('templates', function() {

  gulp.src(config.src)
    .pipe(jade({
      pretty: true,
      data: {
      	title: 'My Site'
      }
    }))
    .pipe(gulp.dest(config.dest))
});