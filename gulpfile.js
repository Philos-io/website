'use strict';

var gulp = require('gulp'),
    plugins    = require('gulp-load-plugins');

var $ = plugins({
  lazy: true
});

var files = {
  js: ['*.js', '**/*.js'],
  css: '',
  baseSrc: 'public',
  dist: 'public/dist',
  images: 'public/dist/images'
};

gulp.task('default', ['express', 'watch']);

gulp.task('help', function(){
  return $.taskListing();
});

gulp.task('watch', function(){
  return  gulp.watch(files.js, ['jshint']);
});

gulp.task('jshint', function(){
  gulp.src(files.js)
        .pipe($.jshint());

});

gulp.task('clean', function(){
  gulp.src(files.dist)
      .pipe($.clean());
});

gulp.task('rename', function(){
  gulp.src('public/modules/**/*.js')
      .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest(files.dist));
});

gulp.task('compress', function(){
  gulp.src('public/modules/**/*.js')
  .pipe($.changed(files.dist))
  .pipe($.uglify())
  .pipe($.rename({suffix: '.min'}))
  .pipe(gulp.dest(files.dist));
});


gulp.task('images', function(){
  gulp.src('public/modules/**/*.png')
  .pipe($.changed(files.images))
  .pipe($.imagemin({optimizationLevel: 5}))
  .pipe(gulp.dest(files.images))
});

gulp.task('debug', function(){
  return
    gulp.src('gulpfile.js')
      .pipe($.nodeInspector({
        'web-port': 1337,
        'web-host': 'localhost',
        'debug-port': 5858,
        'save-live-edit': true,
        'no-preload': true,
        'stack-trace-limit': 50,
        'hidden': []
      }));
});

gulp.task('build', ['compress', '']);


gulp.task('express', function() {
  var express = require('express');
  var app = express();
  app.use(require('connect-livereload')({port: 4002}));
  app.use(express.static(__dirname));
  app.listen(3000);
});


var tinylr;
gulp.task('livereload', function() {
  tinylr = require('tiny-lr')();
  tinylr.listen(4002);
});

function notifyLiveReload(event) {
  var fileName = require('path').relative(__dirname, event.path);

  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}
