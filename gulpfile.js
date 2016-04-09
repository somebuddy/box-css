var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');

var browserSync = require('browser-sync').create();
var serveConfig = require('./bs-config.js');

var excluded_files = [
  '!./node_modules/**/*',
  '!./.c9/**/*',
  '!./.git/**/*',
];

var templateFiles = ['./**/*.html'].concat(excluded_files);
var scriptFiles = ['./client/**/*.js'].concat(excluded_files);
var styleFiles = ['./styles/**/*.scss', './styles/**/*.css'].concat(excluded_files);

// Scripts
gulp.task('clean:build:scripts', function () {
  return del(['./build/**/*.js']);
});

gulp.task('build:scripts', ['clean:build:scripts'], function () {
  console.log('Copying scripts...');
  gulp.src(scriptFiles)
    .pipe(gulp.dest('./build/client'));
});

// Templates
gulp.task('clean:build:templates', function() {
  return del(['./build/**/*.html']);
});

gulp.task('build:client:html', ['clean:build:templates'], function() {
  console.log('Copying templates...');
  gulp.src(templateFiles)
    .pipe(gulp.dest('./build/'));
});

gulp.task('build:templates', ['clean:build:templates', 'build:client:html']);

// Styles
gulp.task('clean:build:styles', function() {
  return del(['./build/styles/**/*.css']);
});

gulp.task('build:sass', ['clean:build:styles'], function() {
  console.log('Compiling sass...');
  gulp.src('styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/styles'));
});

gulp.task('build:styles', ['clean:build:styles', 'build:sass'], function() {
  console.log('Copying css files...');
  gulp.src('styles/**/*.css')
    .pipe(gulp.dest('./build/styles'));
});

// Build all
gulp.task('clean:build', function() {
  return del(['./build/**/*']);
});

gulp.task('build', ['clean:build', 'build:styles', 'build:templates', 'build:scripts']);

gulp.task('serve', ['clean:build', 'build'], function() {
  browserSync.init(serveConfig);
});

gulp.task('default', ['serve']);
