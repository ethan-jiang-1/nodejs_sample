require.paths.unshift('./node_modules')

var http = require('http');

var nHost = process.env.VCAP_APP_HOST;
var nPort = process.env.VCAP_APP_PORT;//||8080;

console.log("server running at host " + nHost);
console.log("server running at port " + nPort);

http.createServer(function(request, response) {
  console.log("get a request");
  
  var proxy = http.createClient(80, request.headers['host'])
  var proxy_request = proxy.request(request.method, request.url, request.headers);
  proxy_request.addListener('response', function (proxy_response) {
    proxy_response.addListener('data', function(chunk) {
      response.write(chunk, 'binary');
    });
    proxy_response.addListener('end', function() {
      response.end();
    });
    response.writeHead(proxy_response.statusCode, proxy_response.headers);
  });
  request.addListener('data', function(chunk) {
    proxy_request.write(chunk, 'binary');
  });
  request.addListener('end', function() {
    proxy_request.end();
  });
}).listen(nPort);

console.log("server started");
