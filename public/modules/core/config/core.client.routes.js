'use strict';

function Configuration($stateProvider, $urlRouterProvider) {
	// Redirect to home view when route not found
	$urlRouterProvider.otherwise('/');

	// Home state routing
	$stateProvider.
	state('home', {
		url: '/',
		templateUrl: 'modules/core/views/home.client.view.html'
	});
}

// Setting up dependencies
var dependencies = ['$stateProvider', '$urlRouterProvider', Configuration]

// Setting up route
angular.module('core').config(dependencies);
