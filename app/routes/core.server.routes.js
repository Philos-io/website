'use strict';


var nodemailer = require('nodemailer');

module.exports = function(app) {
	// Root routing
	var core = require('../../app/controllers/core.server.controller');
	app.route('/').get(core.index);

	app.route('/api/contactus').post(function(req, res){
		var  info = req.body.info

		var transporter = nodemailer.createTransport({
			service: 'Gmail',
			auth: {
					user: 'ping@philos.io',
					pass: 'getbetter'
			}
		});

		// setup e-mail data with unicode symbols
		var mailOptions = {
				from: 'ping@philos.io', // sender address
				to: info.email,
				subject: 'Thank you!',
				html: '<p>Hey '+info.name+', Thank you for your interest in our company!<br/> We will get back to you as soon as possible!</p>'+
				'<b/><p>Philos Team</p>'
		};

		// send mail with defined transport object
		transporter.sendMail(mailOptions, function(error, info){
				res.json({message: 'Thank you for your message'});

				if(error){
						console.log(error);
				}else{
						console.log('Message sent: ' + info.response);
				}
		});
	});
};
