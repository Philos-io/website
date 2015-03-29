(function(module){
	'use strict';

	function WorkshopDetailsController($stateParams, $state, WorkshopService){
		var self = this;

		self.user = {};

		this.get = function(id){
			$state.transitionTo('detail', {workshop_id: id});
		};

		this.join = function(){
			var info = {
				email: self.user.email,
				workshop: $stateParams.workshop_id
			};

			WorkshopService.subscribe(info).then(function(){
				$state.transitionTo('workshops');
			});
		}

		function activate(){
			WorkshopService.get($stateParams.workshop_id).then(success, error);
		}

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
		}

		activate();

	}

	WorkshopDetailsController.$inject = ['$stateParams', '$state', 'WorkshopService'];

	module.controller('WorkshopDetailsController', WorkshopDetailsController);

})(angular.module('workshops'));
