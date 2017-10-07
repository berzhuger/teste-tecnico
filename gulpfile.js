var gulp = require('gulp')
var minifyHtml = require("gulp-minify-html");
var minifyCss = require("gulp-minify-css");
 
gulp.task('minify-html', function () {
    gulp.src('./*.html')
    .pipe(minifyHtml())
    .pipe(gulp.dest('./dist'));
});


 
// task
gulp.task('minify-css', function () {
    gulp.src('./Css/one.css') // path to your file
    .pipe(minifyCss())
    .pipe(gulp.dest('path/to/destination'));
});