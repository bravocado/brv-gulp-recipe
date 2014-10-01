var gulp = require('gulp')
		config = require('../config').copy
;

gulp.task('copy', ['browserify'] , function(){
  gulp.src(config.htaccess)
    .pipe(gulp.dest(config.dest));
});