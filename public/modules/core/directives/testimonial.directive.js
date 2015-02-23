'use strict'

function Feedback(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'modules/core/views/feedback.view.html'
  };
}

angular.module('core').directive('feedback', Feedback);
