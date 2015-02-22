'use strict';

function SocialMedia(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'modules/core/views/socialMedia.view.html'
  };
}


angular.module('core').directive('socialMedia', SocialMedia);
