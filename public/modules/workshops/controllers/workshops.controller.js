'use strict';

function WorkshopsController($state, $http){

	var self = this;
	$http.get('/api/workshops').then(success, error);

	function success(result){
		self.workshops = result.data.workshops;
	}

	function error(){}

	this.get = function(id){
		var state = $state;
		$state.transitionTo('detail', {training_id: 8725});
	};

	this.suggest = function(){
		alert('not implemented yet!');
	};
}

WorkshopsController.$inject = ['$state', '$http'];

angular.module('workshops').controller('WorkshopsController', WorkshopsController);
