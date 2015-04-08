(function(module){
	'use strict';

	function AuthenticationController($http, $location, Authentication, $scope, Common) {

		var self = this;

		self.signup = function() {

			$http.post('/auth/signup', self).then(success, error);

			function success(response) {
				// If successful we assign the response to the global user model
				Authentication.user = response.data;
				self.user = Authentication.user;

				// And redirect to the index page
				$location.path('/workshops');
			}

			function error(err) {

				if (err.status === 301) {
					
					Authentication.isRedirecting = true;

					Authentication.user = {
						email: self.email
					};

					$location.path('/signin');
				}
				self.error = err.message;
			}
		};

		self.signin = function() {

			var model = {
				email: self.email,
				password: self.password
			};

			self.errorMessage = undefined;

			$http.post('/auth/signin', model)
				.then(function(response) {
					// If successful we assign the response to the global user model
					Authentication.user = response.data;
					self.user = Authentication.user;
					self.user.fullName = self.user.firstName +" "+ self.user.lastName;

					Authentication.isRedirecting = false;
					// And redirect to the index page
					$location.path('/workshops');

				}).catch(function(err) {
					self.errorMessage = err.data.message;
				});
		};

		function activate(){

			//Common.isLoginPage = true; //!!(/sign/.exec($location.path()));
			if (!self.user && !Authentication.isRedirecting) {
				Authentication.getCurrent().then(function(response){
					if(response.data){
						Authentication.user = response.data;

						_.extend(self, Authentication.user);

						self.newUser = true;

						self.fullName = self.user.firstName +" "+ self.user.lastName;
					}
				}, function(err){
					throw err;
				});
			}

			if (Authentication.isRedirecting) self.email = Authentication.user.email;
		}

		activate();
	}

	AuthenticationController.$inject = ['$http', '$location', 'Authentication', '$scope', 'Common'];

	module.controller('AuthenticationController', AuthenticationController);

})(angular.module('users'));
