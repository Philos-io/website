'use strict';

var trainings = require('../../app/controllers/trainings.server.controller');

module.exports = function(app){
	app.route('/trainings')
		.get(trainings.list);


	app.route('/trainings/:trainingId')
		.get(trainings.get);
};