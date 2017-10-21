'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    // rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    refresh = require('gulp-refresh'),
    plumber = require('gulp-plumber'),
    duration = require('gulp-duration'),
    webpackStream = require('webpack-stream'),
    webpack = webpackStream.webpack,
    named = require('vinyl-named');

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('styles', () => { //gulp-sass
    return gulp.src('src/components/sass/*.sass')
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
        .pipe(gulp.dest('dist/css'))
        .pipe(refresh());
});

gulp.task('webpack', () => {
    let options = {

    };
    return gulp.src('src/components/js/*.js')
        .on('error', handleError)
        .pipe(webpackStream(options))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});


// gulp.task('scripts', () => {
//     return gulp.src('src/components/js/*.js')
//         .pipe(jshint('.jshintrc'))
//         .pipe(jshint.reporter('default'))
//         .pipe(concat('main.js'))
//         .pipe(gulp.dest('dist/js'))
//         // .pipe(rename({suffix: '.min'}))
//         // .pipe(uglify())
//         .on('error', handleError)
//         .pipe(gulp.dest('dist/js'))
//         .pipe(duration('Scripts task complete'))
//         .pipe(refresh());
// });

// Pug (Jade)
gulp.task('pug', () => {
    return gulp.src('src/components/pug/**/!(_)*.pug')
        .pipe(pug({
            pretty: true
        }).on('error', handleError))
        .pipe(gulp.dest('dist/'))
        .pipe(refresh());
});

// Images
gulp.task('images', () => {
    return gulp.src(['src/components/img/**/*.{jpg,jpeg,png}', '!src/components/img/orig/*.*'])
        .pipe(gulp.dest('dist/css/img/'))
        .pipe(refresh());
});

// HTML
gulp.task('html', () => {
    return gulp.src(['src/components/html/**/!(_)*.*', '!src/components/html/**/orig/*.*'])
        .pipe(gulp.dest('dist/'))
        .pipe(refresh());
});

gulp.task('watch', () => {
    refresh.listen();
    gulp.watch('src/components/sass/*.sass', ['styles']);//Styles
    gulp.watch('src/components/js/*.js', ['webpack']);//Scripts
    gulp.watch('src/components/pug/**/*.pug',['pug']);//Pug
    gulp.watch('src/components/img/**/*.{jpg,jpeg,png}',['images']);//Images
    gulp.watch('src/components/html/**/*.*',['html']);//HTML
});

gulp.task('default', ['styles', 'webpack', 'pug', 'images', 'html', 'watch'], () => {

});