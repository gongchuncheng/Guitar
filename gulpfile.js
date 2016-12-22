'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var sass = require('gulp-sass');

var buffer = require('vinyl-buffer');
var csso = require('gulp-csso');
var imagemin = require('gulp-imagemin');
var merge = require('merge-stream');
var spritesmith = require('gulp.spritesmith');

var uglify = require('gulp-uglify');
var rev = require('gulp-rev');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');

gulp.task('sass', function () {
    gulp.src('./static/src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./static/src/stylesheets'));
});

gulp.task('sprites', function () {
    var spriteData = gulp.src('./src/assets/icons/*.png').pipe(spritesmith({
        imgName: 'sprites-1208.png',
        cssName: 'sprites.css',
        imgPath: static_base_url+'src/assets/sprites-1208.png',
    }));

    var imgStream = spriteData.img
        .pipe(buffer())
        .pipe(imagemin())
        .pipe(gulp.dest('./src/assets/'));

    var cssStream = spriteData.css
        .pipe(csso())
        .pipe(gulp.dest('./src/stylesheets/'));

    return merge(imgStream, cssStream);
});

gulp.task('imagemin',()=>
    gulp.src('./src/assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./src/assets/images/'))
)

gulp.task('uglify', function() {
    return gulp.src('./static/bundle.js')
        .pipe(uglify())
        .pipe(gulp.dest('static/dist'));
});

gulp.task('clean', function () {
    return gulp.src('./static/dist/')
        .pipe(clean());
});

gulp.task('cleanBundle', function() {
    return gulp.src('./static/bundle.js')
        .pipe(clean());
});

gulp.task('rev', function () {
    return gulp.src('./static/dist/bundle.js')
        .pipe(rev())
        .pipe(gulp.dest('./static/dist/'));
});

gulp.task('build', function() {
    runSequence(
        'clean',
        'uglify',
        'rev',
        'cleanBundle'
    );
});
