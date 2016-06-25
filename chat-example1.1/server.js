var http = require("http");
var fs = require("fs");

var portNumber = 3000;
var numberOfClients = 0;
var clients = [];
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
		io.sockets.emit("connected_users",{numberOfClients:numberOfClients,clients:clients});
	},1000);
});

// This block keeps information about the number of clients
// It also keeps a list of socket ids for the clients in clients array
io.sockets.on("connection",function(socket){
	clients.push(socket.id);
	numberOfClients++;
	socket.on('disconnect',function(){
		var indexOfSocket = clients.indexOf(socket.id);
		if(indexOfSocket != -1){
			// remove the object using splice method
			clients.splice(indexOfSocket,1);
		}
		numberOfClients--;
		console.log(numberOfClients);
		console.log(clients);
	});
	console.log(numberOfClients);
	console.log(clients);
});