'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var SubscriberSchema = new Schema({
	email: {
		type: String,
		trim: true,
		required: 'email is required to subscribe to this course',
		match: [/.+\@.+\..+/, 'Please fill a valid email address']
	},
	workshops:{
			type: [{ type: Schema.Types.ObjectId, ref: 'Workshop'}]
		}
});

mongoose.model('Subscriber', SubscriberSchema);
