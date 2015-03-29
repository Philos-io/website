(function(module){
	'use strict';

	function Configuration($stateProvider, $urlRouterProvider, $compileProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');
		//$compileProvider.debugInfoEnabled(false);

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		})
		.state('suggest', {
			url: '/suggest',
			controller: 'CommonController',
			controllerAs: 'vm',
			templateUrl: 'modules/core/views/suggestWorkshop.view.html'
		});

	}

	// Setting up dependencies
	var dependencies = ['$stateProvider', '$urlRouterProvider', '$compileProvider', Configuration]

	// Setting up route
	module.config(dependencies);

})(angular.module('core'));
