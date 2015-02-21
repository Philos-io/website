'use strict';

function WorkshopService($http, $q){

	function getAll(){
		return $http.get('api/workshops');
	}

	function getDetails(id){
		return $http.get('api/workshops/'+id);
	}

	return {
		getAll: getAll,
		get: getDetails
	};
}

WorkshopService.$inject = ['$http', '$q'];


angular.module('workshops').factory('WorkshopService', WorkshopService);
