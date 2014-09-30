var gulp = require('gulp'),
		jade = require('gulp-jade'),
		config = require('../config').templates
;

gulp.task('templates', ['clean'], function() {

  gulp.src(config.src)
    .pipe(jade({
      pretty: true,
      data: {
      	title: 'My Site'
      }
    }))
    .pipe(gulp.dest(config.dest))
});