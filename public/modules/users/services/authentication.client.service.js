(function(module){
	'use strict';

	function UserFactory() {
		var _this = this;

		_this._data = {
			user: window.user
		};

		return _this._data;
	}

	UserFactory.$inject = [];

	// Authentication service for user variables
	module.factory('Authentication', UserFactory);

})(angular.module('users'));
