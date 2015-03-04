'use strict';

function AuthenticationController($http, $location, Authentication) {

	var self = this;

	self.authentication = Authentication;
	/sign/.exec('"/signup"')[0].length
	self.signPage = !!(/sign/.exec($location.path()));

	self.email = 'davy@philos.io';
	self.password = 'this is a test';

	// If user is signed in then redirect back home
	//if (self.authentication.user) $location.path('/');

	self.signup = function() {
		$http.post('/auth/signup', self).success(function(response) {
			// If successful we assign the response to the global user model
			self.authentication.user = response;

			// And redirect to the index page
			$location.path('/');
		}).error(function(response) {
			self.error = response.message;
		});
	};

	self.signin = function() {
		$http.post('/auth/signin', self).success(function(response) {
			// If successful we assign the response to the global user model
			self.authentication.user = response;

			//
			self.authentication.user.fullName = response.firstName +" "+ response.lastName;
			// And redirect to the index page
			$location.path('/');
		}).error(function(response) {
			self.error = response.message;
		});
	};

	self.logout = function(){
		self.authentication.user = null;
		$location.path('/');
	}
}

AuthenticationController.$inject = ['$http', '$location', 'Authentication'];

angular.module('users').controller('AuthenticationController', AuthenticationController);
