'use strict';

function Courses(){
	return {
		restrict: 'E',
		scope: {
			model: '='
		},
		templateUrl: 'modules/trainings/views/Courses.view.html'
	}
}

Courses.$inject = [];
angular.module('trainings').directive('courses', Courses);