'use strict';


function PartnerController($scope){
	this.join = function(){
		console.log('not implemented yet!!');
	};
}

PartnerController.$inject = ['$scope'];

angular.module('partners').controller('PartnerController', [PartnerController]);

