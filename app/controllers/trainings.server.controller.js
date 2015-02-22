'use strict';
var mongoose = require('mongoose');
var Training = mongoose.model('Training');

exports.list = function(req, res){
    Training.find(callback);

    function callback(err, collection){
      if(err) throw err;
      res.json({workshops: collection});
    }
};

exports.get = function(req, res){
  var id = req.params.workshopId;
  Training.find({id: id}, function(err, result){
    if(err) throw err;
    res.json(result);
  });
};

exports.add = function(req, res){
  var mongoose = require('mongoose');
  var Training = mongoose.model('Training');

  Training.create(angularjs, function(err, col){
    if(err) throw err;
    console.log('A new training has been added');
  });
};
