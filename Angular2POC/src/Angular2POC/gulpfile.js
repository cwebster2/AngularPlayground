﻿/// <binding BeforeBuild='default' />

"use strict";

var _ = require('lodash'),
    gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename');

var angularJs = [
    './node_modules/angular2/bundles/angular2.dev.js',
    './node_modules/angular2/bundles/router.dev.js',
    './node_modules/angular2/bundles/angular2-polyfills.js',
    './node_modules/angular2/bundles/http.dev.js',
    './node_modules/angular2/bundles/js'
];

var js = [
    './node_modules/bootstrap/dist/js/bootstrap.js',
    './node_modules/systemjs/dist/system.js*',
    './node_modules/rxjs/bundles/Rx.js',
    './node_modules/typescript/lib/typescript.js',
    './node_modules/jquery/dist/jquery.js',
    './node_modules/es6-shim/es6-shim.min.js*',
    './node_modules/es6-shim/*.map',
    './node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
    './node_modules/toastr/build/*.js*',
    './node_modules/dropzone/dist/*.js'
];

var css = [
    './node_modules/bootstrap/dist/css/bootstrap.css*',
    './node_modules/toastr/build/toastr.css',
    './node_modules/dropzone/dist/dropzone.css',
    './css/*.css'
];

var fonts = [
    './node_modules/bootstrap/dist/fonts/*.*'
];

var app_html = [
    './scripts/app/*.html'
];
var component_html = [
    './scripts/app/components/*.html'
];

gulp.task('copy-js', function () {
    _.forEach(js, function (file, _) {
        gulp.src(file)
            .pipe(gulp.dest('./wwwroot/js'))
    });
    _.forEach(angularJs, function (file, _) {
        gulp.src(file)
            .pipe(gulp.dest('./wwwroot/js/angular2'))
    });
});

gulp.task('copy-min-js', function () {
    _.forEach(js, function (file, _) {
        gulp.src(file)
            .pipe(uglify())
            .pipe(rename({ extname: '.min.js' }))
            .pipe(gulp.dest('./wwwroot/js'))
    });
    _.forEach(angularJs, function (file, _) {
        gulp.src(file)
            .pipe(uglify())
            .pipe(rename({ extname: '.min.js' }))
            .pipe(gulp.dest('./wwwroot/js/angular2'))
    });
});

gulp.task('copy-html', function() {
    _.forEach(app_html, function(file, _) {
        gulp.src(file)
            .pipe(gulp.dest('./wwwroot/app'))
    });
    _.forEach(component_html, function(file, _) {
        gulp.src(file)
            .pipe(gulp.dest('./wwwroot/app/components'))
    });
});

gulp.task('copy-css', function () {
    _.forEach(css, function (file, _) {
        gulp.src(file)
            .pipe(gulp.dest('./wwwroot/css'))
    });
    _.forEach(fonts, function (file, _) {
        gulp.src(file)
            .pipe(gulp.dest('./wwwroot/fonts'))
    });
});

gulp.task('copy-min-css', function () {
    _.forEach(css, function (file, _) {
        gulp.src(file)
            .pipe(cssmin())
            .pipe(rename({ extname: '.min.css' }))
            .pipe(gulp.dest('./wwwroot/css'))
    });
    _.forEach(fonts, function (file, _) {
        gulp.src(file)
            .pipe(gulp.dest('./wwwroot/fonts'))
    });
});

gulp.task('default', ['copy-js', 'copy-css', 'copy-html']);
gulp.task('minify', ['copy-min-js', 'copy-min-css', 'copy-html']);