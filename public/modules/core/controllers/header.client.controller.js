(function(module){
	'use strict';

	function HeaderController($scope, Authentication, Menus) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});
	}

	HeaderController.$inject = ['$scope', 'Authentication', 'Menus'];

	module.controller('HeaderController', HeaderController);

})(angular.module('core'));
