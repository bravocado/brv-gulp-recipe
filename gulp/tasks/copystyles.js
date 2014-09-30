var gulp = require('gulp');
var rename = require('gulp-rename');

// Copy our site styles to a site.css file
// for async loading later
gulp.task('copystyles', function () {
  return gulp.src(['dist/css/style.min.css'])
    .pipe(rename({
      basename: "site"
    }))
    .pipe(gulp.dest('dist/css'));
});

