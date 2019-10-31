const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const gulpSassLint = require('gulp-sass-lint');
const gulpAutoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

function sass() {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(gulpSass({outputStyle: 'compressed'}).on('error', gulpSass.logError))
    .pipe(gulpAutoprefixer({
      grid: 'autoplace'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/css'));
}

function sassLint() {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(gulpSassLint())
    .pipe(gulpSassLint.format())
    .pipe(gulpSassLint.failOnError());
}

exports.default = gulp.parallel(sass, sassLint);
