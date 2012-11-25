var redis = require('redis')
, util = require('util')
, utils = require('../utils')
, config = require('../config').config;

var cache = redis.createClient(config.redisPort, config.redisHost);

exports.index = function(req, res){
	utils.todayTopLinks(cache, 10, function(err, rt){
		res.render('index', { 'links': rt});
	});

};