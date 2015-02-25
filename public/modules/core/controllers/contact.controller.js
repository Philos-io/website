'use strict';

function ContactController($http){
  var self = this;

  self.send = function(){
    var info = {
      captcha: '6LcipQITAAAAAFLSIWqfb8KnbfF6K0tIH59dm8DK',
      name: self.name,
      email: self.email,
      phone: self.phone,
      message: self.message
    };

    $http.post('api/contactus', {info: info}).then(success, error);

    function success(data){
      self.name  = "";
      self.email = ""
      self.phone = "";
      self.message = "";
    }

    function error(err){
      debugger;
    }
  };
}

ContactController.$inject = ['$http'];

angular.module('core').controller('ContactController', ContactController)
