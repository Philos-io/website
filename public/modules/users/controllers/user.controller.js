(function(module){
  'use strict';

  function UserController($http, $location, Authentication) {
	
	var self = this;

    function activate(){
    	if (!Authentication.user) $location.path('/');
    }

    activate();
  }

  UserController.$inject = ['$http', '$location', 'Authentication'];

  module.controller('UserController', UserController);

})(angular.module('users'));
