'use strict';

function Courses(){
	return {
		restrict: 'E',
		scope: {
			model: '='
		},
		templateUrl: 'modules/trainings/views/courses.view.html'
	}
}

Courses.$inject = [];
angular.module('trainings').directive('courses', Courses);
