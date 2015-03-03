(function(){
  'use strict';

  function UserController($scope, $http, $location, Users, Authentication) {
    $scope.user = Authentication.user;

    // If user is not signed in then redirect back home
    if (!$scope.user) $location.path('/');
  }

  UserController.$inject = ['$scope', '$http', '$location', 'Users', 'Authentication'];

  angular.module('users').controller('UserController', UserController);

})();
