'use strict';

var gulp       = require('gulp'),
    plugins    = require('gulp-load-plugins'),
    args       = require('yargs').argv,
    files      = require('./gulp.config')();

var $ = plugins({
  lazy: true
});



gulp.task('default', ['express', 'watch']);

gulp.task('validate', function(){
    $.util.log($.util.colors.blue('validation starts'));

    return gulp.src(files.js)
      //.pipe($.jscs())
      .pipe($.if(args.verbose, $.print()))
      .pipe($.jshint())
      .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
      .pipe('fail');
});


gulp.task('styles', function(){
  $.util.log($.util.colors.blue('css minification starts'));

    gulp.src(files.css)
      .pipe($.autoprefixer({browsers: ['last 2 version']}))
      .pipe($.cssmin())
      .pipe($.rename({suffix: '.min'}))
      .pipe(gulp.dest(files.dist));
});


gulp.task('help', function(){
  return $.taskListing();
});

gulp.task('watch', function(){
  gulp.watch(files.js, ['validate']);
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

gulp.task('concurrent', ['nodemon', 'watch']);

gulp.task('concurrent-debug', ['nodemon', 'watch', 'node-inspector']);

gulp.task('express', function() {
  require('./server');
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
