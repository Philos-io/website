'use strict';

function WorkshopDetailsController($stateParams, $state, WorkshopService){
	var self = this;

	this.get = function(id){
		$state.transitionTo('detail', {workshop_id: id});
	};

	WorkshopService.get($stateParams.workshop_id).then(success, error);

	function success(result){
		_.extend(self, result.data[0]);
		self.fullName = self.firstName + " "+ self.lastName;

		WorkshopService.getAll().then(function(result){
			self.relatedCourses = result.data.workshops.filter(function(workshop){
				return workshop.id != $stateParams.workshop_id;
			});
		});
	}

	function error(){
		debugger;
	}

}

WorkshopDetailsController.$inject = ['$stateParams', '$state', 'WorkshopService'];

angular.module('workshops').controller('WorkshopDetailsController', WorkshopDetailsController);
