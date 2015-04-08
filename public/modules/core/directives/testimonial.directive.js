(function(module){
  'use strict'

  function Feedback(){
    return {
      restrict: 'E',
      templateUrl: 'modules/core/views/feedback.view.html'
    };
  }

  module.directive('feedback', Feedback);

})(angular.module('core'));
