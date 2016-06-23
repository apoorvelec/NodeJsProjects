var http = require("http");

var server = http.createServer(function(request,response){
response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<html>");
      response.write("<head>");
        response.write("<title>Hello World Page</title>");
	response.write("<script>function displayMessage(text){alert(text)}</script>");
	  response.write("</head>");
	    response.write("<body>");
	      response.write("<form><input name=\"text\" type=\"text\" /><input name=\"button\" type=\"submit\" onClick=\"displayMessage(text)\"></form>");
	        response.write("</body>");
		  response.write("</html>");
		    response.end();
});
server.listen(3000);
console.log("Server listening");
