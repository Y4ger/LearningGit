var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('./sassFiles/main.sass') // Gets all files ending with .sass in app/sass
    .pipe(sass({
          outputStyle: 'compressed',
          includePaths: ['node_modules/susy/sass']
      }).on('error', sass.logError))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('./sassFiles/*.sass', ['sass']);
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
