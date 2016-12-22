var express = require('express');
var mongoose = require('mongoose');
var models = require('../models/user');
require('express-mongoose');
var connectionString = 'mongodb://localhost/test';
var options = {};

options = {
	server: {
		auto_reconnect: true,
		poolSize: 5
	}
};

mongoose.connect(connectionString, options, function(err, res){
	if(err) {
    console.log('[mongoose log] Error connecting to: ' + connectionString + '. ' + err);
  } else {
    console.log('[mongoose log] Successfully connected to: ' + connectionString);
  }
});

var User = models.User;

var router = express.Router();

/* GET home page. */
router.get('/api/user', function(req, res, next) {
  var user = new User({
  	userid: Math.random(),
  	password: Math.random()
  });
  user.save();
  res.send(User.find());
});

module.exports = router;