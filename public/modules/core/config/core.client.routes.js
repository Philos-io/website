(function(module){
	'use strict';

	function Configuration($stateProvider, $urlRouterProvider, $compileProvider, $httpProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');
		$compileProvider.debugInfoEnabled(false);
		$httpProvider.useApplyAsync(true);

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html',
			controller: 'HomeController'
		})
		.state('suggest', {
			url: '/suggest',
			controller: 'CommonController',
			controllerAs: 'vm',
			templateUrl: 'modules/core/views/suggestWorkshop.view.html'
		})
		.state('testimonial', {
			url: '/testimonial',
			controller: 'CommonController',
			controllerAs: 'vm',
			templateUrl: 'modules/core/views/testimonial.view.html'
		})
		.state('team', {
			url: '/team',
			controller: 'CommonController',
			controllerAs: 'common',
			templateUrl: 'modules/core/views/team.view.html'
		})
		.state('about', {
			url: '/about',
			controller: 'CommonController',
			controllerAs: 'about',
			templateUrl: 'modules/core/views/about.view.html'
		})
		.state('jobs', {
			url: '/jobs',
			controller: 'CommonController',
			controllerAs: 'jobs',
			templateUrl: 'modules/core/views/jobs.view.html'
		});
	}

	// Setting up dependencies
	Configuration.$inject = ['$stateProvider', '$urlRouterProvider', '$compileProvider', '$httpProvider'];

	// Setting up route
	module.config(Configuration);

})(angular.module('core'));
