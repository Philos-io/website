(function(module){
	'use strict';

	function customers(){

		return {
			restrict: 'E',
			templateUrl: 'modules/core/views/customers.view.html'
		};
	}

	customers.$inject = [];

	module.directive('customers', customers);

})(angular.module('core'));