'use strict';

var trainings = require('../../app/controllers/trainings.server.controller');

module.exports = function(app){
	app.route('/api/workshops')
		.get(trainings.list);


	app.route('/api/workshops/:workshopId')
		.get(trainings.get);

	app.route('/api/workshops/add')
		.get(trainings.add);
};
