(function(module){
  'use strict';

  function UserController($http, $location, Users, Authentication) {
    var self = this;

    self.user = Authentication.user;
  }

  UserController.$inject = ['$http', '$location', 'Users', 'Authentication'];

  module.controller('UserController', UserController);

})(angular.module('users'));
