'use strict';

function WorkshopsController($state, $stateParams, WorkshopService){

	var self = this;

	function activate(){
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
				return workshop.type === "onedayonetech";
			});

			self.corporate = self.workshops.filter(function(workshop){
				return workshop.type === "corporate";
			});

			self.comingsoon = self.workshops.filter(function(workshop){
				return workshop.type === "comingsoon";
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
		$state.transitionTo('detail', {workshop_id: id});
	};

	this.suggest = function(){
		alert('not implemented yet!');
	};

	activate();
}

WorkshopsController.$inject = ['$state', '$stateParams', 'WorkshopService'];

angular.module('workshops').controller('WorkshopsController', WorkshopsController);
