'use strict';

var gulp = require('gulp'),
    $    = require('gulp-load-plugins'),
    taskListing = require('gulp-task-listing')
    config = require('./app/config/config');


gulp.task('default', ['express', 'watch']);

gulp.task('help', taskListing);

gulp.task('watch', function(){
  return  gulp.watch(['*.js', '**/*.js'], ['jshint']);
});

gulp.task('jshint', function(){
  return gulp.src(['*.js', '**/*.js'])
          .pipe($.jshint);

});

gulp.task('express', function(){
  var express = require('express'),
  app = express(),
  app.listen(config.port);
});
