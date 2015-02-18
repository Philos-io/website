'use strict';

function TrainingsController($state){

	console.log('inside training controller');
	this.get = function(id){
		var state = $state;
		$state.transitionTo('detail', {training_id: 8727});
	};

	this.suggest = function(){
		alert('not implemented yet!');
	};
}

TrainingsController.$inject = ['$state'];

angular.module('trainings').controller('TrainingsController', TrainingsController);

