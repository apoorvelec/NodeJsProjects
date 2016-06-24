var http = require("http");
var fs = require("fs");

var portNumber = 3000;
var server = http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html'});
	response.write("Hello World!!");
	response.end();
}).listen(portNumber);
