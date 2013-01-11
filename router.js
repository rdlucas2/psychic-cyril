var fs = require('fs');

function route(handle, pathname, response, postData) {
	console.log("About to route a request for " + pathname);
	if (typeof handle[pathname] === 'function') {
		return handle[pathname](response, postData);
	} else {
	    console.log("No request handler found for " + pathname);
		response.writeHead(404, { "Content-Type": "text/html" });
		fs.readFile('./site/404.html', function (error, html) {
		    if (error) {
		        console.log("There was an error loading the file: " + error);
		        response.writeHead(500);
		        response.end();
		    }
		    response.writeHead(200, { "Content-Type": "text/html" });
		    response.write(html);
		    response.end();
		});
	}
}

exports.route = route;