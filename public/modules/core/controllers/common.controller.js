(function(module){
  'use strict';

  function CommonController($http, $state){

    this.suggest = function(){

      var info = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        technology: this.technology,
        message: this.message
      };

      $http.post('api/suggest', {info: info}).then(success, error);

      function success(data){
        $state.transitionTo('workshops');
      }

      function error(err){
        debugger
      }
    }
  }


  CommonController.$inject = ['$http', '$state'];

  module.controller('CommonController', CommonController);

})(angular.module('core'));
