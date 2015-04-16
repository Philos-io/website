(function(module){
	'use strict';
	function WorkshopsController($state, $stateParams, $document, WorkshopService, WorkshopType){

		var self = this;

		function activate(){
			$document.scrollTop(0, 0);

			WorkshopService.getAll().then(success, error);
		}

		function success(result){
			self.workshops = result.data.workshops;

			if ($stateParams.workshop_id) {
				self.currentWorkshop = self.workshops.filter(function(workshop){
					return workshop.id === $stateParams.workshop_id;
				})[0];

			}else{
				self.onedayonetech = self.workshops.filter(function(workshop){
					return workshop.type === WorkshopType.onedayonetech;
				});

				self.corporate = self.workshops.filter(function(workshop){
					return workshop.type === WorkshopType.corporate;
				});

				self.comingsoon = self.workshops.filter(function(workshop){
					return workshop.type === WorkshopType.comingsoon;
				});
			}
		}

		function error(err){
			throw err;
		}

		this.join = function(){
			var info = {
				workshop_ID: self.currentWorkshop.id,
				company: self.company,
				name: self.contactName,
				email: self.contactEmail,
				phone: self.contactPhone,
				numberAttendees: self.numberAttendees,
				message: self.message
			};

			WorkshopService.register(info).then(function(result){
				$state.go('workshops');
			});
		}

		this.get = function(id){
			mixpanel.track(id);
			$state.transitionTo('detail', {workshop_id: id});
		};

		activate();
	}

	WorkshopsController.$inject = ['$state', '$stateParams', '$document', 'WorkshopService', 'WorkshopType'];

	module.controller('WorkshopsController', WorkshopsController);

})(angular.module('workshops'));