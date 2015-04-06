(function(module){
	'use strict';

	function flip($interval, $timeout, $animate){

		return {
			restrict: 'A',
			link: function(scope, el, attr){

			  	var keywords = ['Lab', 'Coach', 'Advisor', 'Co-creator'], i = 0;

			  	el.text(keywords[0]);

			  	$interval(function(){
			  		if(i >= keywords.length) i = 0;

			  		// $animate.removeClass(el, 'fadeIn')
			  		// 	.then(function(){
			  		// 		$animate.addClass(el, 'fadeOut');		
			  		// 	})
			  		// 	.then(function(){
			  		// 		$timeout(function(){
			  		// 			el.text(keywords[i++]);
			  		// 			$animate.removeClass(el, 'fadeOut');
			  		// 		}, 3000);
			  		// 	})
			  		// 	.then(function(){
			  		// 		$animate.addClass(el, 'fadeIn');
			  		// 	});
			  		
			  		el.fadeOut(1000).text(keywords[i++]).fadeIn(1000).delay(9000);
			  			// .delay(1000);

			  	// 	el.removeClass('fadeInRight')
			  	// 		.addClass('fadeOutUp')
			  	// 		.delay(1500)
		  		// 		.text(keywords[i++])
		  		// 		.delay(1500)
						// .removeClass('fadeOutUp')
						// .addClass('fadeInRight');

			  	}, 3000);
			}
		};
	}


	flip.$inject = ['$interval', '$timeout', '$animate'];

	module.directive('flip', flip);

})(angular.module('core'));