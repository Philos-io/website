(function(module){
	'use strict';

	function WorkshopDetailsController($stateParams, $state, $document, WorkshopService){
		var self = this;

		this.get = function(id){
			mixpanel.track("suggestion: "+id);
			$state.transitionTo('detail', {workshop_id: id});
		};

		this.join = function(){
			if (!self.user.email) return;

			var info = {
				email: self.user.email,
				workshop: $stateParams.workshop_id
			};

			WorkshopService.subscribe(info).then(function(){
				$state.transitionTo('workshops');
			});
		}

		function success(result){
			var data = result.data? result.data[0]: result[0];
			_.extend(self, data);
			self.fullName = self.firstName + " "+ self.lastName;

			WorkshopService.getAll().then(function(result){
				self.relatedCourses = result.data.workshops.filter(function(workshop){
					return workshop.id != $stateParams.workshop_id;
				});
			});
		}

		function error(err){
			throw err;
		}

		function activate(){
			WorkshopService.get($stateParams.workshop_id).then(success, error);

			mixpanel.track($stateParams.workshop_id);
			self.user = {};

			$document.scrollTop(0, 0);
		}
		
		activate();
	}

	WorkshopDetailsController.$inject = ['$stateParams', '$state', '$document', 'WorkshopService'];

	module.controller('WorkshopDetailsController', WorkshopDetailsController);

})(angular.module('workshops'));
