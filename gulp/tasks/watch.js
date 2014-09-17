/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp = require('gulp');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
  gulp.watch('build/sass/**', ['sass']);
  gulp.watch('build/images/**', ['images']);
  gulp.watch('build/htdocs/**', ['markup']);
});
