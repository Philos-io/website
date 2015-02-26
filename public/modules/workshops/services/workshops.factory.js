'use strict';

function WorkshopService($http, $q){

	function getAll(){
		return $http.get('api/workshops');
	}

	function getDetails(id){
		return $http.get('api/workshops/'+id);
	}

	function register(info){
		debugger;
		return $http.post('api/workshops/register', {info: info});
	}

	return {
		getAll: getAll,
		get: getDetails,
		register: register
	};
}

WorkshopService.$inject = ['$http', '$q'];


angular.module('workshops').factory('WorkshopService', WorkshopService);
