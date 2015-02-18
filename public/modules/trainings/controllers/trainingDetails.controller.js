'use strict';

function TrainingDetailsController($stateParams, $http, $q){
	var url = '/trainings/'+ $stateParams.training_id, self = this;

	$http.get(url).then(success, error);

	function success(result){
		_.extend(self, result.data[0]);
	}


	function error(){
		debugger;
	}

}

TrainingDetailsController.$inject = ['$stateParams', '$http', '$q'];

angular.module('trainings').controller('TrainingDetailsController', TrainingDetailsController);


