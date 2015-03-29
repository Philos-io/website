(function(module){
	'use strict';

	function WorkshopService($http){

		function getAll(){
			return $http.get('api/workshops');
		}

		function getDetails(id){
			return $http.get('api/workshops/'+id);
		}

		function register(info){
			return $http.post('api/workshops/register', {info: info});
		}

		function subscribe(info){
			return $http.post('api/workshops/subscribe', {info: info});
		}

		return {
			getAll: getAll,
			get: getDetails,
			register: register,
			subscribe: subscribe
		};
	}

	WorkshopService.$inject = ['$http'];

	module.factory('WorkshopService', WorkshopService);

})(angular.module('workshops'));
