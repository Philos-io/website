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
  modules: [],
  logo: {
    type: String,
    required: true
  },
  location: {
    type: String,
    default: 'Hacker Dojo',
    required: true
  },
  shortTitle: String,
  category: String,
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
  takeways: [String],
  description: {
    type: String,
    required: true
  },
  instructors: {
    type: []
  },
  requirements: {
    type: [String],
    required: true
  },
  relatedCourses: [Schema.Types.ObjectId],
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date
  }
});


mongoose.model('Training', TrainingSchema);
