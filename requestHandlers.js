var exec = require("child_process").exec;
var fs = require('fs');

function open(response, postData) {
    console.log("Request handler 'open' was called.");
	fs.readFile('./site/index.html', function(error, html) {
		if(error) {
			throw error;
	}
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(html);
		response.end();
	});
}

function start(response) {
	console.log("Request handler 'start' was called.");

	exec("ls -lah", function(error, stdout, stderr) {
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(stdout);
		response.end();
	});
}

var querystring = require("querystring");

function upload(response, postData) {
	console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("You've sent the text: " + querystring.parse(postData).text);
    response.end();
}

exports.open = open;
exports.start = start;
exports.upload = upload;