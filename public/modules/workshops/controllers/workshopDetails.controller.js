'use strict';

function WorkshopDetailsController($stateParams, $http){
	var url = 'api/workshops/'+ $stateParams.workshop_id, self = this;

	$http.get(url).then(success, error);

	function success(result){
		_.extend(self, result.data[0]);
		self.fullName = self.firstName + " "+ self.lastName;
	}

	function error(){
		debugger;
	}

}

WorkshopDetailsController.$inject = ['$stateParams', '$http'];

angular.module('workshops').controller('WorkshopDetailsController', WorkshopDetailsController);
