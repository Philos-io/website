(function(module){
  'use strict';

  function tracker($location){
    var options = {
      restrict: 'A',
      link: function(scope, element, attr){
        var target = attr.target.split(',');

        target.forEach(function(element){
          var el = document.getElementById(element);
          angular.element(el).addClass('fadeOut');
          $('body').css('background-color', '#071418');
        });
      }
    };
    return options;
  }

  tracker.$inject = ['$location'];

  module.directive('tracker', tracker);

})(angular.module('core'));
