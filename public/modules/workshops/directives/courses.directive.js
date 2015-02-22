'use strict';

function Course(){
	return {
		restrict: 'E',
		replace: true,
		scope: {
			model: '=',
			getDetails: '&',
			type: '@'
		},
		templateUrl: 'modules/workshops/views/course.view.html'
	}
}

angular.module('workshops').directive('course', Course);
