var gulp = require('gulp');
var critical = require('critical');

// Generate & Inline Critical-path CSS
gulp.task('critical', ['copystyles'], function () {

  // At this point, we have our
  // production styles in main/styles.css

  // As we're going to overwrite this with
  // our critical-path CSS let's create a copy
  // of our site-wide styles so we can async
  // load them in later. We do this with
  // 'copystyles' above

  critical.generateInline({
    base: 'dist/',
    src: 'index.html',
    styleTarget: 'css/site.css',
    htmlTarget: 'index.html',
    width: 320,
    height: 480,
    minify: true
  });
});