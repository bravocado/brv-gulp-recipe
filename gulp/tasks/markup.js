var gulp = require('gulp');

gulp.task('markup', function() {
  return gulp.src('build/htdocs/**')
    .pipe(gulp.dest('dist'));
});
