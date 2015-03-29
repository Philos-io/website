(function(module){
  'use strict';

  function Mentor(){

    return {
      restrict: 'E',
      templateUrl:'modules/workshops/views/mentor.view.html',
      scope:{
        model: '='
      }
    };
  }

  Mentor.$inject = [];

  module.directive('mentor', Mentor);

})(angular.module('workshops'));
