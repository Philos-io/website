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
			controllerAs: 'team',
			templateUrl: 'modules/core/views/team.view.html'
		})
		.state('about', {
			url: '/about',
			controller: 'CommonController',
			controllerAs: 'about',
			templateUrl: 'modules/core/views/about.view.html'
		})
		.state('services', {
			url: '/services',
			controller: 'CommonController',
			controllerAs: 'services',
			templateUrl: 'modules/core/views/services.view.html'
		})
		.state('jobs', {
			url: '/jobs',
			controller: 'CommonController',
			controllerAs: 'jobs',
			templateUrl: 'modules/core/views/jobs.view.html'
		});
	}

	// Setting up dependencies
	var dependencies = ['$stateProvider', '$urlRouterProvider', '$compileProvider', Configuration]

	// Setting up route
	module.config(dependencies);

	module.config(function($httpProvider) {
    	//Enable cross domain calls
    	// $httpProvider.defaults.useXDomain = true;

    	//  delete $httpProvider.defaults.headers.common['X-Requested-With'];
	});

})(angular.module('core'));
