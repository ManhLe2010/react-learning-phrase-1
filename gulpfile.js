const gulp = require('gulp');

gulp.task('copy', () => {
  return gulp
    .src([
      'node_modules/font-awesome/fonts/fontawesome-webfont.*'])
    .pipe(gulp.dest('static/fonts/'));
})
