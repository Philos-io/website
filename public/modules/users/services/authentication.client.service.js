(function(module){
	'use strict';

	function UserFactory($http) {

		function logout(){
			return $http.get('/auth/signout');
		}

		function getCurrentUser(){
			return $http.get('/users/me');	
		}

		return {
			logout: logout,
			getCurrent: getCurrentUser
		};
	}

	UserFactory.$inject = ['$http'];

	// Authentication service for user variables
	module.factory('Authentication', UserFactory);

})(angular.module('users'));
