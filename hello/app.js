var http = require('http');

http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/plain'});
 res.end('Hello World from jyz\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

//vmc auto config the listen port in loadbanlance as 80
//see here for details: http://blog.cloudfoundry.com/2012/08/14/cloud-foundry-now-supports-auto-reconfiguration-for-node-js-applications/

/*
//require.paths.unshift('./node_modules')

var express = require('./node_modules/express');
var app = express();


port = 3000;
//if (typeof process != 'undefined')
//	port = process.env.VCAP_APP_PORT || 3000

app.get('/', function(req, res){
    res.send('hello world test using express and npm');
	
	console.log('ip of request is from remote: ' + req.connection.remoteAddress);
	console.log('ip of request is from x-forward: ' + req.header('x-forwarded-for'));
	//console.log('full request is');
	//console.log(req);
});
app.listen(port)

console.log('Server running at port: '+ port );
*/