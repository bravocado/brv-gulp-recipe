var gulp = require('gulp');

gulp.task('build', ['clean', 'templates', 'sass', 'sass:compressed']);