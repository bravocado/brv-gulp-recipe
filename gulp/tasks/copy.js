var gulp = require('gulp')
		config = require('../config').copy
;

gulp.task('copy', function(){
  gulp.src(config.htaccess)
    .pipe(gulp.dest(config.dest));
});