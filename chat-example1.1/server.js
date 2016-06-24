var http = require("http");
var fs = require("fs");

var portNumber = 3000;
var numberOfClients = 0;
var server = http.createServer(function(request,response){
	fs.readFile("client.html","utf-8",function(err,data){
		response.writeHead(200,{'Content-Type':'text/html'});
		response.write(data);
		response.end();
	});
}).listen(portNumber);

var io = require("socket.io").listen(server);

io.sockets.on("connection",function(socket){
	socket.on("message_to_server",function(data){
		io.sockets.emit("message_to_client",{message:data["message"]});
	});

	setInterval(function(){
		io.sockets.emit("connected_users",numberOfClients);
	},1000);
});

io.sockets.on("connection",function(socket){
	numberOfClients++;
	socket.on('disconnect',function(){
		numberOfClients--;
		console.log(numberOfClients);
	});
	console.log(numberOfClients);
});
