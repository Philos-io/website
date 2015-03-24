(function(){
	'use strict';

	function WorkshopService($http, $cacheFactory, $q){

		var apiUrls = {
			workshops: 'api/workshops'
		};

		function getAll(){

			return $http.get(apiUrls.workshops, {cache: true});
		}

		function getDetails(id){

			var cache = $cacheFactory.get('$http');

			if (cache.get(apiUrls.workshops)) {
				var defer = $q.defer();

				var data = JSON.parse(cache.get('api/workshops')[1]);

				var selectWorkshop = data.workshops.filter(function(ws){
					return ws.id === id;
				});

				if(selectWorkshop){
					defer.resolve(selectWorkshop);
					return defer.promise;
				}
			}

			return $http.get('api/workshops/'+id);
		}

		function register(info){
			return $http.post('api/workshops/register', {info: info});
		}

		function subscribe(info){
			return $http.post('api/workshops/subscribe', {info: info});
		}

		return {
			getAll: getAll,
			get: getDetails,
			register: register,
			subscribe: subscribe
		};
	}

	WorkshopService.$inject = ['$http', '$cacheFactory', '$q'];


	angular.module('workshops').factory('WorkshopService', WorkshopService);

})();
