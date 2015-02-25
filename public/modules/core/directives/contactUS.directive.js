'use strict';


function ContactUs(){
  return {
    restrict: 'E',
    replace: true,
    controller: 'ContactController',
    controllerAs: 'contact',
    templateUrl: 'modules/core/views/contactUs.view.html'
  };
}

angular.module('core').directive('contactUs', ContactUs);
