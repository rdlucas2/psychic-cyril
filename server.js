var http = require("http");
var url = require("url");
var fs = require('fs');

function start(route, handle) {
    function onRequest(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;

        var filePath = '.' + request.url;
        if (filePath == './') {
            filePath = './site/index.html';
        } else {
            filePath = './site' + request.url;
        }

        console.log("\nRequest for " + pathname + " received.");

        if (fs.existsSync(filePath)) {
            fs.exists(filePath, function (exists) {

                if (exists) {
                    fs.readFile(filePath, function (error, content) {
                        if (error) {
                            console.log("There was an error loading the file: " + error);
                            response.writeHead(500);
                            response.end();
                        }
                        else {
                            console.log("Request is a valid file - loading the file...");
                            response.writeHead(200, { 'Content-Type': 'text/html' });
                            response.end(content, 'utf-8');
                        }
                    });
                }
                else {
                    console.log("Valid file but 404'd???");
                    response.writeHead(404);
                    response.end();
                }
            });
        }
        else {
            request.setEncoding("utf8");

            request.addListener("data", function (postDataChunk) {
                postData += postDataChunk;
                console.log("Received POST data chunk '" +
                postDataChunk + "'.");
            });

            request.addListener("end", function () {
                route(handle, pathname, response, postData);
            });
        }
    }
    var app = http.createServer(onRequest).listen(5000);
    console.log("\nServer has started.");

    io = require('socket.io').listen(app);
<<<<<<< HEAD

=======
    
>>>>>>> dc9470cd4b506fdb869718a4de9c9df3bb550ecf
    io.configure(function () {
        io.set("transports", ["xhr-polling"]);
        io.set("polling duration", 10);
    });
<<<<<<< HEAD

=======
    
>>>>>>> dc9470cd4b506fdb869718a4de9c9df3bb550ecf
    io.sockets.on('connection', function (socket) {

        socket.on('set nickname', function (name) {
            socket.set('nickname', name, function () { socket.emit('ready'); });
        });

        socket.on('msg', function (data) {
            socket.get('nickname', function (err, name) {
                console.log('Chat message by ', name);
                io.sockets.emit('user', { user: name });
                io.sockets.emit('sent', { sent: data });
            });
        });

    });
}

exports.start = start;