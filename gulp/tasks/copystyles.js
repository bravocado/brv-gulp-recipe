var gulp = require('gulp');
var rename = require('gulp-rename');
var config=require('../config').copystyles;

// Copy our site styles to a site.css file
// for async loading later
gulp.task('copystyles', function () {
  return gulp.src([config.src])
    .pipe(rename({
      basename: "site"
    }))
    .pipe(gulp.dest(config.dest));
});

