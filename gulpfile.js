//  Require Gulp into file and define the variable
var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('njk', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('pages/**/*.+(html|njk)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('portfolio'))
});

