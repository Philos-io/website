(function(module){
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

	Course.$inject = [];

	module.directive('course', Course);

})(angular.module('workshops'));
