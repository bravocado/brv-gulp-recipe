var gulp = require('gulp')
		del = require('del')
;

// Clean Output Directory
gulp.task('clean', del.bind(null, ['dist']));