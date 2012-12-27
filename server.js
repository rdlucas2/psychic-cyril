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

    port = process.env.PORT || 5000;
    var app = http.createServer(onRequest).listen(port);

    console.log("\nServer has started.");

    io = require('socket.io').listen(app);

    var userlist = {};
    io.sockets.on('connection', function (socket) {

        var UNAME = "";
        socket.on('set nickname', function (name) {
            if (userlist.hasOwnProperty(name) || name == null || name == "") {
                socket.emit('duplicateNickname');
            }
            else {
                socket.set('nickname', name, function () { socket.emit('ready'); });
                io.sockets.emit('loggedin', { loggedin: name });
                UNAME = name;
                userlist[name] = name;
                userlist[name] = socket.id;
                console.log(userlist);
                io.sockets.emit('userlist', userlist);
            }
        });

        socket.on('private msg', function (message) {
            socket.get('nickname', function (err, UNAME) {
                console.log('PM message by ', UNAME);
                var socketid = userlist[message["pmu"]];
                console.log(socketid);
                io.sockets.socket(socketid).emit('for your eyes only', { pm: message["pm"], pmf: UNAME });
            });
        });

        socket.on('msg', function (data) {
            socket.get('nickname', function (err, UNAME) {
                console.log('Chat message by ', UNAME);
                io.sockets.emit('user', { user: UNAME });
                io.sockets.emit('sent', { sent: data });
            });
        });

        socket.on('disconnect', function (data) {
            io.sockets.emit('disconnecting', { user: UNAME });
            console.log(userlist);
            delete userlist[UNAME];
            console.log(userlist);
            io.sockets.emit('userlist', userlist);
        });

        socket.on('xy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnxy', { x: x, y: y })
        });


    });

}

exports.start = start;