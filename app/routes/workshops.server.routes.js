'use strict';

var workshops = require('../../app/controllers/workshops.server.controller');

module.exports = function(app){
	app.route('/api/workshops')
		.get(workshops.list);

	app.route('/api/workshops/:workshopId')
		.get(workshops.get);

	app.route('/api/workshops/register')
		.post(workshops.register);

	app.route('/api/workshops/subscribe')
		.post(workshops.subscribe);
};
