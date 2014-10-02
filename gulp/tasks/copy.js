var gulp = require('gulp'),
		config = require('../config').copy
;

gulp.task('copy:misc', ['scripts'] , function() {
  gulp.src(config.htaccess)
    .pipe(gulp.dest(config.miscDest));
});

gulp.task('copy:scripts', ['scripts'] , function() {
  gulp.src(config.scriptSrc)
    .pipe(gulp.dest(config.scriptDest));
});