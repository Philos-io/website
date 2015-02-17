'use strict';

exports.list = function(req, res){
  //res.json({training: 'philos.io'});
};

exports.get = function(req, res){

  //res.json({training: 'NodeJS'});
  debugger;
  var mongoose = require('mongoose');
  var Training = mongoose.model('Training');

  Training.create(training, function(err, col){
    if(err) throw err;
    console.log('A new training has been added');

    res.json({success: true});
  });

};



var training = {
  id: '8727',
  title: 'Become a Productive NodeJS Developer',
  tags: ['javascript', 'NodeJS', 'Express', 'Koa'],
  description: 'This is a deepth dive into JavaScript on the server: NodeJS! In this One week, One project we are going to build, deploy and monitore a NodeJS application! Throughout our journey, we are going to learn everything you need to know to get going with NodeJS!',
  level: 'intermediaire',
  requirements: ['Experience with at least one programming language', 'A computer', 'Github Account'],
  logo: 'modules/trainings/images/TRAININGS-ILLUSTRATIONS-01.png',
  instructors: ['Davy Engone']
};

exports.add = function(req, res){
  debugger;
  var mongoose = require('mongoose');
  var Training = mongoose.model('Training');

  Training.create(training, function(err, col){
    if(err) throw err;
    console.log('A new training has been added');
  });
};
