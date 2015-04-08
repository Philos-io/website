(function(module){
	'use strict';

	function Common(){
		var common = {
			isLoginPage: false
		};

		return common;
	}

	Common.$inject = [];

	module.factory('Common', Common);

})(angular.module('core'));