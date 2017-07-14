var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('./sass/style.sass') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('./sass/*.sass', ['sass']);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('./pages/*.html', browserSync.reload);
  gulp.watch('./index.html', browserSync.reload);

});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
})
