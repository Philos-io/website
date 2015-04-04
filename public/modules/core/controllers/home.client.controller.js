(function(module){
  'use strict';

  function HomeController($scope, Authentication, $http, $location, $document, Common, $anchorScroll){

  	var self = this;

  	function activate(){
		  $document.scrollTop(0, 0);

      self.isLoginPage = Common.isLoginPage;

  		if (!self.user) {
  			$http.get('/users/me').then(function(response){
  				if(response.data){
  					Authentication.user = response.data;
  					self.user = Authentication.user;
  				}
			   });
		  }else{
			 self.user = Authentication.user;
		  }
    }

    activate();

    this.goTo = function(hash){
      $location.hash(hash);
      $anchorScroll();
    };

  	$scope.$watch(function(){
  		return Common.isLoginPage;
  	}, function(newVal, oldVal){
  		if (newVal !== oldVal) self.isLoginPage = newVal;
  	});

    $scope.$watch(function(){
      return Authentication.user;
    }, function(newVal, oldVal){
      if (newVal) self.user = newVal;
    });

  	self.logout = function(){
  		self.user = null;
      Authentication.user = null;

  		Authentication.logout().then(function(){
  			$location.path('/workshops');
  		});
  		
  	};
  }

  HomeController.$inject = ['$scope', 'Authentication', '$http', '$location', '$document', 'Common', '$anchorScroll'];

  module.controller('HomeController', HomeController);

})(angular.module('core'));
