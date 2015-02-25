'use strict';

function Course(){
	return {
		restrict: 'E',
		replace: true,
		scope: {
			model: '=',
			getDetails: '&get',
			type: '@',
			display: "="
		},
		templateUrl: 'modules/workshops/views/course.view.html'
	}
}

angular.module('workshops').directive('course', Course);
