(function(module){
	'use strict';

	// Setting up route
	module.config(['$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
			// Redirect to home view when route not found
			$urlRouterProvider.otherwise('/');

			// Home state routing
			$stateProvider
				.state('workshops', {
					url: '/workshops',
					templateUrl: 'modules/workshops/views/workshops.index.view.html',
					controller: 'WorkshopsController',
					controllerAs: 'model'
				})
				.state('workshops.add', {
					url: '/workshops/add',
					templateUrl: 'modules/workshops/views/workshops.add.view.html',
					controller: 'WorkshopsController',
					controllerAs: 'ws'
				})
				.state('join', {
					url: '/workshops/{workshop_id}/join',
					templateUrl: 'modules/workshops/views/workshops.join.view.html',
					controller: 'WorkshopsController',
					controllerAs: 'ws'
				})
				.state('detail', {
					url: '/workshops/{workshop_id}',
					templateUrl: 'modules/workshops/views/workshops.details.view.html',
					controller: 'WorkshopDetailsController',
					controllerAs: 'ws'
				});
		}
	]);

})(angular.module('workshops'));
