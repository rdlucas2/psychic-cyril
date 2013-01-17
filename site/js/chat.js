var socket = io.connect(window.location.hostname);
var unique = "";

var msgRecieved = "";
var userRecieved = "";
socket.on('user', function (data) {
    userRecieved = data["user"];
});

socket.on('sent', function (data) {
    msgRecieved = data["sent"];
    var scrollable = $('#main');
    var inner = $('#main > .inner');

    var atBottom = Math.abs(inner.offset().top) + scrollable.height() + scrollable.offset().top >= inner.outerHeight();

    inner.append('<div class="' + unique + 'message"><span class="' + unique + 'user">' + userRecieved + ' says: </span><span class="' + unique + 'sent">' + msgRecieved + '</span></div>')

    if (atBottom) {
        scrollable.animate({ scrollTop: inner.outerHeight() });
    }
});

var name = "";
socket.on('loggedin', function (data) {
    $('.visible').remove();
    $('.hidden').removeClass('hidden');

    name = data['loggedin'];
    var scrollable = $('#main');
    var inner = $('#main > .inner');

    var atBottom = Math.abs(inner.offset().top) + scrollable.height() + scrollable.offset().top >= inner.outerHeight();
    unique = Math.random();

    inner.append('<div class="' + unique + 'message"><span class="' + unique + 'user">' + name + '</span><span class="' + unique + 'sent"> has connected...</span></div>');

    if (atBottom) {
        scrollable.animate({ scrollTop: inner.outerHeight() });
    }
});

socket.on('duplicateNickname', function () {
    $('.alert-error').text("Invalid name (or someone might already be using it)!");
});

socket.on('connect', function () {

    $('#SENDname').click(function(){
        console.log('hi');
        socket.emit('set nickname', $('#username').val());
    });

    socket.on('ready', function () {
        $("#SEND").click(function () {
            if ($('#TEXT').val().substr(0, 2) == "/w") {
                tname = $('#TEXT').val().split(" ", 2);
                message = $('#TEXT').val().split(tname[1], 2)
                pmu = tname[1];
                socket.emit('private msg', { pm: message[1], pmu: pmu });
                unique = Math.random();
                var scrollable = $('#main');
                var inner = $('#main > .inner');
                var atBottom = Math.abs(inner.offset().top) + scrollable.height() + scrollable.offset().top >= inner.outerHeight();
                inner.append('<div style="color:red" class="' + unique + 'message"><span class="' + unique + 'user">To ' + pmu + ': </span><span class="' + unique + 'sent">' + message[1] + '</span></div>');
                if (atBottom) {
                    scrollable.animate({ scrollTop: inner.outerHeight() });
                }

            }
            else {
                socket.emit('msg', $("#TEXT").val());
            }
            unique = Math.random();
            $('#TEXT').val("");
        });
        $('#TEXT').bind('keyup', function (e) {
            if (e.keyCode === 13) { // 13 is enter key
                if ($('#TEXT').val().substr(0, 2) == "/w") {
                    tname = $('#TEXT').val().split(" ", 2);
                    message = $('#TEXT').val().split(tname[1], 2)
                    pmu = tname[1];
                    socket.emit('private msg', { pm: message[1], pmu: pmu });
                    unique = Math.random();
                    var scrollable = $('#main');
                    var inner = $('#main > .inner');
                    var atBottom = Math.abs(inner.offset().top) + scrollable.height() + scrollable.offset().top >= inner.outerHeight();
                    inner.append('<div style="color:red" class="' + unique + 'message"><span class="' + unique + 'user">To ' + pmu + ': </span><span class="' + unique + 'sent">' + message[1] + '</span></div>');
                    if (atBottom) {
                        scrollable.animate({ scrollTop: inner.outerHeight() });
                    }

                }
                else {
                    socket.emit('msg', $("#TEXT").val());
                }
                unique = Math.random();
                $('#TEXT').val("");
            }
        });
    });
});

socket.on('disconnecting', function (data) {
    var scrollable = $('#main');
    var inner = $('#main > .inner');

    var atBottom = Math.abs(inner.offset().top) + scrollable.height() + scrollable.offset().top >= inner.outerHeight();

    inner.append('<div class="' + unique + 'message"><span class="' + unique + 'user">' + data['user'] + '</span><span class="' + unique + 'sent"> has disconnected...</span></div>');

    if (atBottom) {
        scrollable.animate({ scrollTop: inner.outerHeight() });
    }
});

socket.on('userlist', function (data) {
    $('#USERS').empty();
    $.each(data, function (key, value) {
        $('#USERS').append('<div class="' + key + '">' + key + '</div>');
    });
});

socket.on('for your eyes only', function (data) {
    msgRecieved = data["pm"];
    userRecieved = data["pmf"];
    var scrollable = $('#main');
    var inner = $('#main > .inner');

    var atBottom = Math.abs(inner.offset().top) + scrollable.height() + scrollable.offset().top >= inner.outerHeight();

    inner.append('<div style="color:red" class="' + unique + 'message"><span class="' + unique + 'user">' + userRecieved + ' whispers: </span><span class="' + unique + 'sent">' + msgRecieved + '</span></div>');

    if (atBottom) {
        scrollable.animate({ scrollTop: inner.outerHeight() });
    }
});