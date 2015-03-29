(function(module){
  'use strict';

  function SocialMedia(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'modules/core/views/socialMedia.view.html'
    };
  }

  module.directive('socialMedia', SocialMedia);

})(angular.module('core'));
