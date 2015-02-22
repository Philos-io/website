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

angular.module('workshops').directive('mentor', Mentor);
