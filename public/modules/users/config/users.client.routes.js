'use strict';

// Setting up route
angular.module('users').config(['$stateProvider',
	function($stateProvider) {

		// Users state routing
		$stateProvider.

		state('password', {
			url: '/settings/password',
			templateUrl: 'modules/users/views/settings/change-password.client.view.html'
		}).
		state('account',{
			url: '/account',
			abstract: true,
			templateUrl: 'modules/users/views/settings/edit-profile.client.view.html'
		})
		.state('account.workshops',{
			url: '/workshops',
			template: 'workshop view'
		})
		.state('account.profile',{
			url: '/profile',
			template: 'profile view'
		})
		.state('account.quizz',{
			url: '/quizz',
			template: 'quizz view'
		})
		.state('account.settings',{
			url: '/settings',
			template: 'settings view'
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
]);
