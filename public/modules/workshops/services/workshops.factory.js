'use strict';

function TrainingService($http, $q){

	function getAll(){

	}

	function getDetails(){

	}

	return {
		getAll: getAll,
		get: getDetails
	};
}

TrainingService.$inject = ['$http', '$q'];


angular.module('workshops').factory('TrainingService', TrainingService);
