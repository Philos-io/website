'use strict';

function WorkshopsController($state, WorkshopService){

	var self = this;

	WorkshopService.getAll().then(success, error);

	function success(result){
		self.workshops = result.data.workshops;
		self.onedayonetech = result.data.workshops.filter(function(workshop){
			return workshop.type === "onedayonetech";
		});

		self.corporate = result.data.workshops.filter(function(workshop){
			return workshop.type === "corporate";
		});

		self.comingsoon = result.data.workshops.filter(function(workshop){
			debugger;
			return workshop.type === "comingsoon";
		});
	}

	function error(){}

	this.get = function(id){
		$state.transitionTo('detail', {workshop_id: id});
	};

	this.suggest = function(){
		alert('not implemented yet!');
	};
}

WorkshopsController.$inject = ['$state', 'WorkshopService'];

angular.module('workshops').controller('WorkshopsController', WorkshopsController);
