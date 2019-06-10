var pug = require('gulp-pug');
var watch = require('gulp-watch');
var gulp = require('gulp');

gulp.task('pug',function() {
    return gulp.src('./public/views/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./public/src'));
});

gulp.task('watch', function () {
return watch('./public/views/*.pug', { ignoreInitial: false })
    .pipe(gulp.dest('pug'));
});