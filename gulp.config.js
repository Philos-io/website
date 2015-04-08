'use strict';

module.exports = function(){
  var paths = {
    js: ['public/modules/**/*.js', '*.js'],
    css: ['public/modules/**/*.css'],
    baseSrc: 'public',
    dist: 'public/dist',
    images: 'public/dist/images'
  };


  return paths;
};
