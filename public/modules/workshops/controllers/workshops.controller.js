'use strict';

function WorkshopsController($state, WorkshopService){

	var self = this;

	WorkshopService.getAll().then(success, error);

	function success(result){
		self.workshops = result.data.workshops;
	}

	function error(){}

	this.get = function(id){
		debugger
		$state.transitionTo('detail', {workshop_id: id});
	};

	this.suggest = function(){
		alert('not implemented yet!');
	};
}

WorkshopsController.$inject = ['$state', 'WorkshopService'];

angular.module('workshops').controller('WorkshopsController', WorkshopsController);
