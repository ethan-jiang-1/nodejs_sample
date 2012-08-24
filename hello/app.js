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
