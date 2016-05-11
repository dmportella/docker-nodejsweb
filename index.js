var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
  });
} else {
	var http = require('http');

	// Configure our HTTP server to respond with Hello World to all requests.
	var server = http.createServer(function (request, response) {
	  response.writeHead(200, {"Content-Type": "text/plain"});
	  response.end("Hello World\n");
	});

	// Listen on port 8000, IP defaults to 127.0.0.1
	server.listen(process.env.PORT || 8080, function(){
	    var addr = server.address();
    	console.log('#', cluster.worker.id, "|Server listening at", addr.address + ":" + addr.port);
  	});
}