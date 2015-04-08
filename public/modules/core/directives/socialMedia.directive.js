(function(module){
  'use strict';

  function SocialMedia(){
    return {
      restrict: 'E',
      scope: {
      	info: '='
      },
      templateUrl: 'modules/core/views/socialMedia.view.html'
    };
  }

  SocialMedia.$inject = [];

  module.directive('socialMedia', SocialMedia);

})(angular.module('core'));
