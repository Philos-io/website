'use strict';

function Mentor(){

  return {
    restrict: 'E',
    templateUrl:'modules/trainings/views/mentor.view.html',
    scope:{
      model: '='
    }
  };
}

angular.module('trainings').directive('mentor', Mentor);
