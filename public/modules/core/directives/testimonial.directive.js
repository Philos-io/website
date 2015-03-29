(function(module){
  'use strict'

  function Feedback(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'modules/core/views/feedback.view.html'
    };
  }

  module.directive('feedback', Feedback);

})(angular.module('core'));
