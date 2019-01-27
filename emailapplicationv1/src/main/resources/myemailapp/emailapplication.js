// --- Email Account Application ---

// Require the http module in node.js
var http = require('http');

// Include/require the URL module in node.
var url = require('url');

var express = require("express");

var myParser = require("body-parser");

var app = express();

var qs = require('querystring');



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
	    response.write("<form action='http://localhost:8081/login' method='POST'>");
		response.write("Username: <input type='text' id='username' name='username' /><br>");
		response.write("Password: <input type='text' id='password' name='password' /><br>");
		response.write("<input type='submit' value='Login'>");
		response.write("</form>");
	    response.write("</body>");
		response.write("</html>");
	} 

	/* if (request.url == "/loginSuccess") {

		console.log("Rendering login success page: ");

		// Write the HTML login page output to the response
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write("<html>"); 
		response.write("<head>");  
		response.write("<title>Email Application Login page</title>"); 
		response.write("</head>"); 
		response.write("<body>"); 
	    response.write("<h1>You have successfully Logged in</h1>");
	    response.write("</body>");
		response.write("</html>");
	} 

	if (request.url == "/loginFailure") {

		console.log("Rendering login failure page: ");

		// Write the HTML login page output to the response
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write("<html>"); 
		response.write("<head>");  
		response.write("<title>Email Application Login page</title>"); 
		response.write("</head>"); 
	    response.write("<h1>You have failed to login to the application</h1>");
		response.write("<body>"); 
	    response.write("</body>");
		response.write("</html>");
	} */

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
		response.write("<input type='submit' value='Register Account'>");
		response.write("</form>");
		response.write("</body>");
		response.write("</html>");
	}
 
	if (request.url == "/accountCreatedSuccess") {

		var jsonString = '';
		var result = '';

	    response.writeHead(200, {'Content-Type': 'text/html'});
		response.write("<html>"); 
		response.write("<head>");  
		response.write("<title>Email Application Account Created Successfully page</title>"); 
		response.write("</head>"); 
		response.write("<body>"); 
		response.write("<h1>Account Created Successfully</h1>");
		response.write("<br>");

		var username = function (request) {

			if (request.method == 'POST') {
		        jsonString = '';

		        request.on('data', function (data) {
		            jsonString += data;
					result = JSON.parse(jsonString);
					console.log("username in getUsername is "+ result.username);
					return result.username;
		            
		        });
			}
		};

		// response.write("Username="+ username(request));

		/** This does not return the username come what may..

			var myCallback = function(data) {
		  console.log('got data: '+data);
		};

		var usingItNow = function(callback) {
		  callback('get it?');
		};

		usingItNow(myCallback);

		*/
		response.write("<a href='http://localhost:8085/login'><button>Login</button></a>"); 
		response.write("<br>");
		response.write("</body>");
		response.write("</html>"); 
	}	

	if (request.url == "/accountCreationFailure") {

 		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write("<html>"); 
		response.write("<head>");  
		response.write("<title>Email Application Account Creation Failure page</title>"); 
		response.write("</head>"); 
		response.write("<body>"); 
		response.write("<h1>The Account was not created as the username already exists. Please try again.</h1>");
		response.write("<br>");
		response.write("<a href='http://localhost:8085/accountCreation'><button>Create Account</button></a>"); 
		response.write("</body>");
		response.write("</html>"); 
	}

	if (request.url == "/passwordIncorrect") {

 		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write("<html>"); 
		response.write("<head>");  
		response.write("<title>Email Application Account Login Failure page</title>"); 
		response.write("</head>"); 
		response.write("<body>"); 
		response.write("<h1>The Account was not logged into as the password was incorrect. Please try again.</h1>");
		response.write("<br>");
		response.write("<a href='http://localhost:8085/login'><button>Login</button></a>"); 
		response.write("</body>");
		response.write("</html>"); 
	}

	if (request.url == "/inbox") {

 		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write("<html>"); 
		response.write("<head>");  
		response.write("<title>Email Application Account Inbox page</title>"); 
		response.write("</head>"); 
		response.write("<body>"); 
		response.write("<h1>User Inbox.</h1>");
		response.write("<br>");

		response.write("<table>");
		response.write("<tr><th>From</th><th>Subject</th><th>Body</th><th>Delete</th></tr>");

		// Iterate here over elements when I have worked out how to get the JSON from the request as
		// a defintive value and not undefined

		response.write("</table>");
		response.write("<br>"); 
		response.write("<a href='http://localhost:8081/newEmail'><button>Compose New Email</button></a>"); 
		response.write("<br>");
		response.write("</body>");
		response.write("</html>");
	}

	if (request.url == "/composeNewEmail") {
		
 		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write("<html>"); 
		response.write("<head>");  
		response.write("<title>Email Application Account Compose New Email page</title>"); 
		response.write("</head>"); 
		response.write("<body>"); 
		response.write("<h1>Compose New Email.</h1>");
		response.write("<br>");

		response.write("<form action='http://localhost:8081/insertEmail' method='POST'>");

		// Insert drop down of selected to1 users parsed from the JSON 
		response.write("To: <select><option value='?'>?</option></select><br>");

		response.write("Subject: <input type='text' id='subject' name='subject' /><br>");
		response.write("Body: <input type='textarea' id='body' name='body' /><br>");
		response.write("<input type='submit' value='Insert Email'>");
		response.write("</form>");
		response.write("<br>");
		response.write("</body>");
		response.write("</html>");
	}

	


	// End the response
	response.end(); 


}




).listen(8085); // Ensure the server object listens on port 8085