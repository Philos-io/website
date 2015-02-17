'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TrainingSchema = new Schema({
  id: {
    type: String
  },
  title: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  },
  location: {
    type: String,
    default: 'Hacker Dojo',
    required: true
  },
  type: {
    type: String,
    enum: ['corporate', 'onedayonetech', 'meetup'],
    default: 'corporate',
    required: true
  },
  level:{
    type: String,
    enum: ['beginner', 'intermediaire', 'advanced', 'expert'],
    default: 'beginner',
    required: true
  },
  tags: {
    type: [String]
  },
  description: {
    type: String,
    required: true
  },
  instructors: {
    type: [String]
  },
  requirements: {
    type: [String],
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date
  }
});

mongoose.model('Training', TrainingSchema);
