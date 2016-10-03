'use strict';

var gulp = require('gulp'),
        // sass = require('node-sass'),
        sass = require('gulp-sass'),
        jade = require('gulp-pug'),
        coffee = require('gulp-coffee'),
        autoprefixer = require('gulp-autoprefixer'),
        minifycss = require('gulp-minify-css'),
        sourcemaps = require('gulp-sourcemaps'),
        // rename = require('gulp-rename'),
        concat = require('gulp-concat'),
        // compass = require('gulp-compass'),
        jshint = require('gulp-jshint'),
        uglify = require('gulp-uglify'),
        refresh = require('gulp-refresh'),
        plumber = require('gulp-plumber'),
        duration = require('gulp-duration');


// by Fesor
function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('styles', function() { //gulp-sass
      return gulp.src('_/components/sass/*.sass')
        .pipe(sass({ style: 'expanded' }))
          .on('error', handleError)
          // .pipe(plumber())
        .pipe(autoprefixer({browsers: ['last 2 versions', 'ie 11', 'Android >= 4.1', 'Safari >= 8', 'iOS >= 8']}))
          .pipe(duration('rebuilding files'))
        .pipe(gulp.dest('app/assets/temp'))
        // .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.init())//sourcemaps
        .pipe(minifycss())
        .pipe(sourcemaps.write('./'))//sourcemaps
        .pipe(gulp.dest('public_html/css'))
        .pipe(refresh());
});

gulp.task('scripts', function() {
  return gulp.src('_/components/js/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('public_html/js'))
    // .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('public_html/js'))
    .pipe(duration('Scripts task complete'))
    .pipe(refresh());
});

// CoffeeScript
gulp.task('coffee', function() {
  gulp.src('_/components/coffee/*.coffee')
    .pipe(coffee({bare: true}).on('error', handleError))
    .pipe(gulp.dest('public_html/js'));
});

// Jade
gulp.task('jade', function() {
  return gulp.src('_/components/jade/**/*.jade')
    .pipe(jade({
      pretty: true
    }).on('error', handleError))
    .pipe(gulp.dest('public_html/'))
    .pipe(refresh());
});

gulp.task('watch', function() {
  refresh.listen();
  gulp.watch('_/components/sass/*.sass', ['styles']);//styles
  gulp.watch('_/components/js/*.js', ['scripts']);//scripts
  gulp.watch('_/components/coffee/*.coffee', ['coffee']);//coffee
  gulp.watch('_/components/jade/**/*.jade',['jade']);//html
  // gulp.watch('*.html', notifyLiveReload);
  // gulp.watch('public_html/css/*.css', notifyLiveReload);
});

gulp.task('default', ['styles', 'scripts', 'coffee', 'jade', 'watch'], function() {

});