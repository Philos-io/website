'use strict';

module.exports = {
	app: {
		title: 'Philos | Stay Ahead',
		description: 'philos, Level up your JavaScript Skills',
		keywords: 'software engineering, workshops, training, monitoring and more...'
	},
	prerender: process.env.PRERENDER,
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'philosontherise',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/css/bootstrap.css',
				'public/lib/bootstrap/css/bootstrap-theme.css',
				'public/lib/font-awesome/css/font-awesome.css',
				'public/lib/animate-css/animate.css'
			],
			js: [
				'public/lib/jquery/dist/jquery.js',
				'public/lib/jquery.easing/js/jquery.easing.js',
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js',
				'public/lib/angular-animate/angular-animate.js',
				'public/lib/angular-touch/angular-touch.js',
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'public/lib/angular-scroll/angular-scroll.js',
				'public/lib/bootstrap/dist/js/bootstrap.js',
				'public/lib/wow/dist/wow.js',
				'public/lib/underscore/underscore.js',
				'public/lib/underscore/underscore.js'
			]
		},
		css: [
			'public/modules/assets/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};

//
// <!-- Facebook META -->
// <meta property="fb:app_id" content="{{facebookAppId}}">
// <meta property="og:site_name" content="{{title}}">
// <meta property="og:title" content="{{title}}">
// <meta property="og:description" content="{{description}}">
// <meta property="og:url" content="{{url}}">
// <meta property="og:image" content="{{log}}">
// <meta property="og:type" content="website">
//
// <!-- Twitter META -->
// <meta name="twitter:title" content="{{title}}">
// <meta name="twitter:description" content="{{description}}">
// <meta name="twitter:url" content="{{url}}">
// <meta name="twitter:image" content="/img/brand/logo.png">
