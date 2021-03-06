'run strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');

var paths = ['**/*.js', './lib/*.js'];

gulp.task('eslint', function(){
  return gulp.src(paths)
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.watch('watch', ()=>{
  gulp.watch('**/*.js', !'package.json', ['eslint']);
});

gulp.task('default', ['eslint']);
