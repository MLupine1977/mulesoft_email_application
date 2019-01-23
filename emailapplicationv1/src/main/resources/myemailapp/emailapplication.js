// --- Email Account Application ---

// Require the http module in node.js
var http = require('http');

// Include/require the URL module in node.
var url = require('url');

var express = require("express");

var myParser = require("body-parser");

var app = express();

var qs = require('querystring');

//var XMLHttpRequest = require('');
// var xhr = new XMLHttpRequest();

// Create a server object
http.createServer(function (request, response) {
	
	console.log("The request url is: "+ request.url);

	// The landing/home page which shows the Login and
	// 'Create Account' buttons
	if (request.url == "/") {

		console.log("Rendering landing/home page: ");

		// Write the HTML home page output to the response
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write("<html>"); 
		response.write("<head>");  
		response.write("<title>Email Application landing page</title>"); 
		response.write("</head>"); 
		response.write("<body>"); 
	    response.write("<a href='login'>Login</a>"); 
	    response.write("<br>");
	    response.write("<a href='accountCreation'>Create Account</a>"); 
	    response.write("</body>");
		response.write("</html>");
	}

	if (request.url == "/login") {

		console.log("Rendering login page: ");

		// Write the HTML login page output to the response
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write("<html>"); 
		response.write("<head>");  
		response.write("<title>Email Application Login page</title>"); 
		response.write("</head>"); 
		response.write("<body>"); 
	    response.write("<h1>The Login Page</h1>");
	    response.write("</body>");
		response.write("</html>");
	} 

	if (request.url == "/accountCreation") {
		console.log("Rendering createAccount page: ");

		// Write the HTML account creation page output to the response
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write("<html>"); 
		response.write("<head>");  
		response.write("<title>Email Application Create Account page</title>"); 
		response.write("</head>"); 
		response.write("<body>"); 
	    response.write("<h1>The Create Account Page</h1>");
		response.write("<form action='http://localhost:8081/createAccount' method='POST'>");
		response.write("Username: <input type='text' id='username' name='username' /><br>");
		response.write("Password: <input type='text' id='password' name='password' /><br>");
		response.write("<input type='submit' value='Submit'>");
		response.write("</form>");
		response.write("</body>");
		response.write("</html>");
	}

	if (request.url == "/accountCreationSuccess") {

		//var xmlhttp = new XMLHttpRequest();
		

		console.log("Rendering account creation success page: ");

		//app.use(express.json());

		console.log("1=The request is: "+ request.body);

		//app.post('*', function(request, response){
  				      // your JSON
  			// response.send(request.body);    // echo the result back
		//});

		/* xmlhttp.onreadystatechange = function() {
		  if (this.readyState == 4 && this.status == 200) {
		    var myObj = JSON.parse(this.body);
		    	console.log("parsedJSON = "+ myObj);
		  }
		};
		xmlhttp.open("POST", "/accountCreationSuccess", true);
		xmlhttp.send();  */


		//var parsedParameters1 = JSON.parse(this.body);
		//var parsedParameters2 = JSON.stringify(parsedParameters1);

		//xmlhttp.setRequestHeader("Content-type", "text/html");
		//xmlhttp.send(parsedParameters1);

		// Parse the URL
		//var parsedParameters = url.parse(request.url, true);

		//var queryResult = parsedParameters.query;


		//console.log("parsedParameters1: "+ parsedParameters1);
		//console.log("parsedParameters2: "+ parsedParameters2);
		//console.log(request.body);
       // console.log(queryResult);

		//console.log("Rendering account creation success page: ");
		//console.log("parsedParameters: " + request.body.username);
		//console.log("queryResult: " + request.body.password);


		// Write the HTML login page output to the response
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write("<html>"); 
		response.write("<head>");  
		response.write("<title>Email Application Account Created Successfully page</title>"); 
		response.write("</head>"); 
		response.write("<body>"); 
	    response.write("<h1>Account Created Successfully</h1>");
	    response.write("<br>");
		response.write("Username=");
		response.write("<br>");
		response.write("Password=");
	    response.write("</body>");
		response.write("</html>"); 
	}

	// End the response
	response.end(); 


}).listen(8085); // Ensure the server object listens on port 8085