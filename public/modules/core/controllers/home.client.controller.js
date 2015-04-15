(function(module){
  'use strict';

  function HomeController($scope, Authentication, $http, $location, $document, $anchorScroll, AppConfig, $state){

  	var self = this;

  	function activate(){
		  $document.scrollTop(0, 0);


      self.mediaInfo = AppConfig.media;

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

    self.subscribe = function(){

      $http.post('/users/subscribe', {email: self.subscriberEmail})
        .then(function(response){
          self.subscriberEmail = "";
          self.subscriberMessage = response.data.message;
        });
    };

    self.changeState = function(link){
      return $state.includes(link);
    };

    self.goTo = function(hash){
      $anchorScroll.yOffset = 100;

      if($location.path() !== '/') $location.path('/');
      
      $location.hash(hash);
      $anchorScroll();
    };

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

  HomeController.$inject = ['$scope', 'Authentication', '$http', '$location', '$document', '$anchorScroll', 'AppConfig', '$state'];

  module.controller('HomeController', HomeController);

})(angular.module('core'));
