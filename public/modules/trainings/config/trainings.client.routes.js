'use strict';

// Setting up route
angular.module('trainings').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('trainings', {
			url: '/trainings',
			templateUrl: 'modules/trainings/views/trainings.index.view.html',
			controller: 'TrainingsController',
			controllerAs: 'Trainings'
		})
		.state('trainings.add', {
			url: '/trainings.add',
			templateUrl: 'modules/trainings/views/trainings.add.view.html',
			controller: 'TrainingsController',
			controllerAs: 'Trainings'
		})
		.state('trainings.detail', {
			url: '/trainings:training_id',
			templateUrl: 'modules/trainings/views/trainingDetails.index.view.html',
			controller: 'TrainingDetailsController',
			controllerAs: 'Trainings'
		});
	}
]);