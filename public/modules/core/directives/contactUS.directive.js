(function(module){
  'use strict';


  function ContactUs(){
    return {
      restrict: 'E',
      controller: 'ContactController',
      controllerAs: 'contact',
      templateUrl: 'modules/core/views/contactUs.view.html'
    };
  }

  module.directive('contactUs', ContactUs);

})(angular.module('core'));
