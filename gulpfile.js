'use strict';
//
// good read on gulp:
//   https://medium.com/@contrahacks/gulp-3828e8126466#.3dy973337
//   http://mrbool.com/continuous-javascript-tdd-with-nodejs-and-gulp/33798
//

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

var srcPath = 'js/*.js';

process.on('uncaughtException', function(e) {
    console.error(e.stack);
});

gulp.task('test', function() {
    gulp.src(srcPath)
        .pipe($.jasmine());
});

gulp.task('default', ['test'], function() {
    gulp.watch(srcPath, ['test']);
});