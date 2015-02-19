var config = require('./config');

var ytdl = require('ytdl-core');

var express = require('express'),
		app = express();

console.log('Enabled Proxy: ' + config.proxy);

app.get('/youtube/:id/:quality', function(req, res){
	res.set('content-type', 'video/mp4');
	ytdl('http://www.youtube.com/watch?v=' + req.params.id, {
		proxy: config.proxy,
		quality: req.params.quality
	}).pipe(res);
});

app.listen(config.listen.port, config.listen.host, function(){
	console.log('Ourtube-Streamer listening at ' + config.listen.host + ':' + config.listen.port)
});