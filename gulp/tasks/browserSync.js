var browserSync = require('browser-sync');
var gulp        = require('gulp');

gulp.task('browserSync', ['build'], function() {
  browserSync({
    server: {
      // build is included for use with sass source maps
      baseDir: ['dist', 'build']
    },
    files: [
      // Watch everything in build
      "build/**",
      // Exclude sourcemap files
      "!build/**.map"
    ]
  });
});
