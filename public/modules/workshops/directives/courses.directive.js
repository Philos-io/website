'use strict';

function Courses(){
	return {
		restrict: 'E',
		scope: {
			model: '='
		},
		templateUrl: 'modules/workshops/views/courses.view.html'
	}
}

Courses.$inject = [];
angular.module('workshops').directive('courses', Courses);
