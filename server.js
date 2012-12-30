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

        socket.on('wkingxy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnwkingxy', { x: x, y: y })
        });

        socket.on('wqueenxy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnwqueenxy', { x: x, y: y })
        });

        socket.on('wbishop1xy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnwbishop1xy', { x: x, y: y })
        });

        socket.on('wbishop2xy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnwbishop2xy', { x: x, y: y })
        });

        socket.on('wknight1xy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnwknight1xy', { x: x, y: y })
        });

        socket.on('wknight2xy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnwknight2xy', { x: x, y: y })
        });

        socket.on('wrook1xy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnwrook1xy', { x: x, y: y })
        });

        socket.on('wrook2xy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnwrook2xy', { x: x, y: y })
        });

        socket.on('wpawn1xy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnwpawn1xy', { x: x, y: y })
        });

        socket.on('wpawn2xy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnwpawn2xy', { x: x, y: y })
        });

        socket.on('wpawn3xy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnwpawn3xy', { x: x, y: y })
        });

        socket.on('wpawn4xy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnwpawn4xy', { x: x, y: y })
        });

        socket.on('wpawn5xy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnwpawn5xy', { x: x, y: y })
        });

        socket.on('wpawn6xy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnwpawn6xy', { x: x, y: y })
        });

        socket.on('wpawn7xy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnwpawn7xy', { x: x, y: y })
        });

        socket.on('wpawn8xy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnwpawn8xy', { x: x, y: y })
        });

        socket.on('bkingxy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnwbingxy', { x: x, y: y })
        });

        socket.on('bqueenxy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnbqueenxy', { x: x, y: y })
        });

        socket.on('bbishop1xy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnbbishop1xy', { x: x, y: y })
        });

        socket.on('bbishop2xy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnbbishop2xy', { x: x, y: y })
        });

        socket.on('bknight1xy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnbknight1xy', { x: x, y: y })
        });

        socket.on('bknight2xy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnbknight2xy', { x: x, y: y })
        });

        socket.on('brook1xy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnbrook1xy', { x: x, y: y })
        });

        socket.on('brook2xy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnbrook2xy', { x: x, y: y })
        });

        socket.on('bpawn1xy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnbpawn1xy', { x: x, y: y })
        });

        socket.on('bpawn2xy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnbpawn2xy', { x: x, y: y })
        });

        socket.on('bpawn3xy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnbpawn3xy', { x: x, y: y })
        });

        socket.on('bpawn4xy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnbpawn4xy', { x: x, y: y })
        });

        socket.on('bpawn5xy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnbpawn5xy', { x: x, y: y })
        });

        socket.on('bpawn6xy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnbpawn6xy', { x: x, y: y })
        });

        socket.on('bpawn7xy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnbpawn7xy', { x: x, y: y })
        });

        socket.on('bpawn8xy', function (data) {
            x = data["x"];
            y = data["y"];
            io.sockets.emit('returnbpawn8xy', { x: x, y: y })
        });

    });

}

exports.start = start;