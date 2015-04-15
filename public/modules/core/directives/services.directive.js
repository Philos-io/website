(function(module){
	'use strict';

	function services(){

		return {
			restrict: 'E',
			templateUrl: 'modules/core/views/services.view.html'
		};
	}

	services.$inject = [];

	module.directive('services', services);

})(angular.module('core'));