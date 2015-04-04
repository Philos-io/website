(function(module){
	'use strict';

	function Configuration($httpProvider) {
		// Set the httpProvider "not authorized" interceptor
		// $httpProvider.interceptors.push(['$q', '$location', 'Authentication',
		// 	function($q, $location, Authentication) {
		// 		return {
		// 			responseError: function(rejection) {
		// 				switch (rejection.status) {
		// 					case 401:
		// 						// Deauthenticate the global user
		// 						Authentication.user = null;

		// 						// Redirect to signin page
		// 						$location.path('signin');
		// 						break;
		// 					case 403:
		// 						// Add unauthorized behaviour
		// 						break;
		// 				}
		// 				return $q.reject(rejection);
		// 			}
		// 		};
		// 	}
		// ]);
	}
	// Config HTTP Error Handling
	module.config(['$httpProvider',Configuration]);
})(angular.module('users'));
