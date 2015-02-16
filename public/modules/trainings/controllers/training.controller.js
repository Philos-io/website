'use strict';

function TrainingsController($state){

	console.log('inside training controller');
	this.get = function(id){

		var state = $state;

		$state.transitionTo('detail', {training_id: 10});
		//debugger;
	};

	this.suggest = function(){
		alert('not implemented yet!');
	};
}

angular.module('trainings').controller('TrainingsController', ['$state', TrainingsController]);

