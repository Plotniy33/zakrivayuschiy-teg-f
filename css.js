const gulp = require('gulp');
const concat = require('gulp-concat-css');
const plumber = require('gulp-plumber');

function css() {
  return gulp
    .src('src/**/*.css')
    .pipe(plumber())
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('dist/'));
}
