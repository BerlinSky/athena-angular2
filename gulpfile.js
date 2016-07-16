var gulp = require('gulp');
var assetsDev = 'assets/';
var assetsProd = 'src/';
var appSrc = 'src/';
var appDev = 'dev/';
var dist = 'dist/';

var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var cssClean = require('gulp-clean-css');

var typescript = require('gulp-typescript');
var tsProject = typescript.createProject('tsconfig.json');

gulp.task('build-css', function () {
  return gulp.src(appSrc + 'sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({
        browsers: ['last 3 versions'],
        cascade: false
    }))
    .pipe(cssClean({compatibility: 'ie8'}))
    .pipe(gulp.dest(dist + 'styles/css/'));
});

gulp.task('build-ts', function () {
  return gulp.src(appDev + '**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(typescript(tsProject))
    .pipe(sourcemaps.write())
    //.pipe(jsuglify())
    .pipe(gulp.dest(dist));
});

gulp.task('bundle-ts', ['build-ts'], function() {
  var path = require("path");
  var Builder = require('systemjs-builder');

  var builder = new Builder('', 'systemjs.config.js');

  builder
    .buildStatic('dist/boot.js', 'dist/bundle.js', { minify: true, sourceMaps: true})
    .then(function() {
    console.log('Build complete');
  })
  .catch(function(err) {
    console.log('Build error');
    console.log(err);
  });
});

gulp.task('watch', function () {
    gulp.watch(appDev + '**/*.ts', ['build-ts']);
    gulp.watch(assetsDev + 'scss/**/*.scss', ['build-css']);
});

gulp.task('default', ['watch', 'build-ts', 'bundle-ts', 'build-css']);


