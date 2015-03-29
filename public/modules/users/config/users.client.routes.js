(function(module){
	'use strict';

	function Routes($stateProvider) {

		// Users state routing
		$stateProvider.
		state('password', {
			url: '/settings/password',
			templateUrl: 'modules/users/views/settings/change-password.client.view.html'
		}).
		state('account',{
			url: '/account',
			abstract: true,
			templateUrl: 'modules/users/views/account/edit-profile.client.view.html'
		})
		.state('account.workshops',{
			url: '/workshops',
			controller: 'UserController',
			controllerAs: 'user',
			templateUrl: 'modules/users/views/account/workshops.view.html'
		})
		.state('account.profile',{
			url: '/profile',
			controller: 'UserController',
			controllerAs: 'user',
			templateUrl: 'modules/users/views/account/profile.view.html'
		})
		.state('account.quizz',{
			url: '/quizz',
			controller: 'UserController',
			controllerAs: 'user',
			templateUrl: 'modules/users/views/account/quizz.view.html'
		})
		.state('account.settings',{
			url: '/settings',
			controller: 'UserController',
			controllerAs: 'user',
			templateUrl: 'modules/users/views/account/settings.view.html'
		})
		.state('signup', {
			url: '/signup',
			controller: 'AuthenticationController',
			controllerAs: 'auth',
			templateUrl: 'modules/users/views/authentication/signup.client.view.html'
		}).
		state('signin', {
			url: '/signin',
			controller: 'AuthenticationController',
			controllerAs: 'auth',
			templateUrl: 'modules/users/views/authentication/signin.client.view.html'
		}).
		state('forgot', {
			url: '/password/forgot',
			templateUrl: 'modules/users/views/password/forgot-password.client.view.html'
		}).
		state('reset-invalid', {
			url: '/password/reset/invalid',
			templateUrl: 'modules/users/views/password/reset-password-invalid.client.view.html'
		}).
		state('reset-success', {
			url: '/password/reset/success',
			templateUrl: 'modules/users/views/password/reset-password-success.client.view.html'
		}).
		state('reset', {
			url: '/password/reset/:token',
			templateUrl: 'modules/users/views/password/reset-password.client.view.html'
		});
	}

	// Setting up routes
	module.config(['$stateProvider',Routes]);

})(angular.module('users'));
