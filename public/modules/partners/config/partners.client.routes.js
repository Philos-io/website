'use strict';

// Setting up route
angular.module('partners').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('partners', {
			url: '/partners',
			templateUrl: 'modules/partners/views/partners.index.view.html',
			controller: 'PartnerController',
			controllerAs: 'Partner'
		});
	}
]);