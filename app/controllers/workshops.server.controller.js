'use strict';
var mongoose = require('mongoose');
var Workshop = mongoose.model('Workshop');
var nodemailer = require('nodemailer');

exports.list = function(req, res){
    Workshop.find(callback);

    function callback(err, collection){
      if(err) throw err;
      res.json({workshops: collection});
    }
};

exports.get = function(req, res){
  var id = req.params.workshopId;
  Workshop.find({id: id}, function(err, result){
    if(err) throw err;
    res.json(result);
  });
};

exports.register = function(req, res){

  var info = req.body.info;

  var mailOptions = {
			from: 'ping@philos.io', // sender address
			to: info.email,
			subject: 'Thank you!',
			html: '<p>Hey '+info.name+', Thank you for your interest in our workshops!<br/> We will get back to you as soon as possible!</p>'+
			'<b/><p>Philos Team</p>'
	};
  sendEmail(req, res, mailOptions);

  var mailOptions = {
			from: 'ping@philos.io', // sender address
			to: 'davy@philos.io',
			subject: info.workshop_ID,
			html: '<p>Hey guys, '+info.company+' has expressed his interest for the '+info.workshop_ID +
      ' workshop! They have '+info.numberAttendees+' attendees! We should contact them ASAP!</p>'+
      '<br/><p>Here are more information about the contact person: '+
      '<ul>'+
      '<li>Name: '+info.name+'</li>'+
      '<li>Email: '+info.email+'</li>'+
      '<li>Phone: '+info.phone+'</li>'+
      '<li>Message: '+info.message+'</li><ul/>'+
      '</p>'
	};

  sendEmail(req, res, mailOptions, function(){
    res.json({message: 'Thank you for registering to this workshop'});
  });
};

function sendEmail(req, res, options, callback){

	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
				user: 'ping@philos.io',
				pass: 'getbetter'
		}
	});

	// send mail with defined transport object
	transporter.sendMail(options, function(error, info){
		if(error){
				console.log(error);
		}else{
				console.log('Message sent: ' + info.response);
        if (callback) callback();
		}
	});
}
