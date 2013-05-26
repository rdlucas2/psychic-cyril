function loadImages(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    for (var src in sources) {
        numImages++;
    }
    for (var src in sources) {
        images[src] = new Image();
        images[src].onload = function () {
            if (++loadedImages >= numImages) {
                callback(images);
            }
        };
        images[src].src = sources[src];
    }
}

function initStage(images) {
    var stage = new Kinetic.Stage({
        container: "canvas",
        width: 800,
        height: 624
    });
    var layer = new Kinetic.Layer();

    // wking
    var wkingImg = new Kinetic.Image({
        image: images.wking,
        x: 345,
        y: 535,
        width: 40,
        height: 40,
        draggable: true
    });

    // add cursor styling
    wkingImg.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    wkingImg.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    wkingImg.on('dragend touchend', function () {
        x = wkingImg.getPosition().x;
        y = wkingImg.getPosition().y;
        socket.emit('wkingxy', { x: x, y: y, img: wkingImg });
    });

    layer.add(wkingImg);

    socket.on('returnwkingxy', function (data) {
        x = data["x"];
        y = data["y"];
        wkingImg.setPosition(x, y);
        console.log(x + ", " + y);
        layer.add(wkingImg);
        stage.add(layer);
        return false;
    });

    //wqueen
    var wqueenImg = new Kinetic.Image({
        image: images.wqueen,
        x: 265,
        y: 535,
        width: 40,
        height: 40,
        draggable: true,
        name: "wqueenImg"
    });

    // add cursor styling
    wqueenImg.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    wqueenImg.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    wqueenImg.on('dragend touchend', function () {
        x = wqueenImg.getPosition().x;
        y = wqueenImg.getPosition().y;
        socket.emit('wqueenxy', { x: x, y: y });
    });

    layer.add(wqueenImg);

    socket.on('returnwqueenxy', function (data) {
        x = data["x"];
        y = data["y"];
        wqueenImg.setPosition(x, y);
        console.log(x + ", " + y);
        layer.add(wqueenImg);
        stage.add(layer);
        return false;
    });

    // wbishop1
    var wbishopImg1 = new Kinetic.Image({
        image: images.wbishop,
        x: 200,
        y: 535,
        width: 40,
        height: 40,
        draggable: true,
        name: "wbishopImg1"
    });

    // add cursor styling
    wbishopImg1.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    wbishopImg1.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    wbishopImg1.on('dragend touchend', function () {
        x = wbishopImg1.getPosition().x;
        y = wbishopImg1.getPosition().y;
        socket.emit('wbishop1xy', { x: x, y: y });
    });

    layer.add(wbishopImg1);

    socket.on('returnwbishop1xy', function (data) {
        x = data["x"];
        y = data["y"];
        wbishopImg1.setPosition(x, y);
        console.log(x + ", " + y);
        layer.add(wbishopImg1);
        stage.add(layer);
        return false;
    });

    //wbishop2
    var wbishopImg2 = new Kinetic.Image({
        image: images.wbishop,
        x: 415,
        y: 535,
        width: 40,
        height: 40,
        draggable: true,
        name: "wbishopImg2"
    });

    // add cursor styling
    wbishopImg2.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    wbishopImg2.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    wbishopImg2.on('dragend touchend', function () {
        x = wbishopImg2.getPosition().x;
        y = wbishopImg2.getPosition().y;
        socket.emit('wbishop2xy', { x: x, y: y });
    });

    layer.add(wbishopImg2);

    socket.on('returnwbishop2xy', function (data) {
        x = data["x"];
        y = data["y"];
        wbishopImg2.setPosition(x, y);
        console.log(x + ", " + y);
        layer.add(wbishopImg2);
        stage.add(layer);
        return false;
    });

    // wknight1
    var wknightImg1 = new Kinetic.Image({
        image: images.wknight,
        x: 125,
        y: 535,
        width: 40,
        height: 40,
        draggable: true,
        name: "wknightImg1"
    });

    // add cursor styling
    wknightImg1.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    wknightImg1.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    wknightImg1.on('dragend touchend', function () {
        x = wknightImg1.getPosition().x;
        y = wknightImg1.getPosition().y;
        socket.emit('wknight1xy', { x: x, y: y });
    });

    layer.add(wknightImg1);

    socket.on('returnwknight1xy', function (data) {
        x = data["x"];
        y = data["y"];
        wknightImg1.setPosition(x, y);
        console.log(x + ", " + y);
        layer.add(wknightImg1);
        stage.add(layer);
        return false;
    });

    //wknight2
    var wknightImg2 = new Kinetic.Image({
        image: images.wknight,
        x: 485,
        y: 535,
        width: 40,
        height: 40,
        draggable: true,
        name: "wknightImg2"
    });

    // add cursor styling
    wknightImg2.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    wknightImg2.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    wknightImg2.on('dragend touchend', function () {
        x = wknightImg2.getPosition().x;
        y = wknightImg2.getPosition().y;
        socket.emit('wknight2xy', { x: x, y: y });
    });

    layer.add(wknightImg2);

    socket.on('returnwknight2xy', function (data) {
        x = data["x"];
        y = data["y"];
        wknightImg2.setPosition(x, y);
        console.log(x + ", " + y);
        layer.add(wknightImg2);
        stage.add(layer);
        return false;
    });

    // wrook1
    var wrookImg1 = new Kinetic.Image({
        image: images.wrook,
        x: 50,
        y: 535,
        width: 40,
        height: 40,
        draggable: true,
        name: "wrookImg1"
    });

    // add cursor styling
    wrookImg1.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    wrookImg1.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    wrookImg1.on('dragend touchend', function () {
        x = wrookImg1.getPosition().x;
        y = wrookImg1.getPosition().y;
        socket.emit('wrook1xy', { x: x, y: y });
    });

    layer.add(wrookImg1);

    socket.on('returnwrook1xy', function (data) {
        x = data["x"];
        y = data["y"];
        wrookImg1.setPosition(x, y);
        console.log(x + ", " + y);
        layer.add(wrookImg1);
        stage.add(layer);
        return false;
    });

    //wrook2
    var wrookImg2 = new Kinetic.Image({
        image: images.wrook,
        x: 560,
        y: 535,
        width: 40,
        height: 40,
        draggable: true,
        name: "wrookImg2"
    });

    // add cursor styling
    wrookImg2.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    wrookImg2.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    wrookImg2.on('dragend touchend', function () {
        x = wrookImg2.getPosition().x;
        y = wrookImg2.getPosition().y;
        socket.emit('wrook2xy', { x: x, y: y });
    });

    layer.add(wrookImg2);

    socket.on('returnwrook2xy', function (data) {
        x = data["x"];
        y = data["y"];
        wrookImg2.setPosition(x, y);
        console.log(x + ", " + y);
        layer.add(wrookImg2);
        stage.add(layer);
        return false;
    });

    //wpawn1
    var wpawnImg1 = new Kinetic.Image({
        image: images.wpawn,
        x: 50,
        y: 455,
        width: 40,
        height: 40,
        draggable: true,
        name: "wpawnImg1"
    });

    // add cursor styling
    wpawnImg1.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    wpawnImg1.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    wpawnImg1.on('dragend touchend', function () {
        x = wpawnImg1.getPosition().x;
        y = wpawnImg1.getPosition().y;
        socket.emit('wpawn1xy', { x: x, y: y });
    });

    layer.add(wpawnImg1);

    socket.on('returnwpawn1xy', function (data) {
        x = data["x"];
        y = data["y"];
        wpawnImg1.setPosition(x, y);
        console.log(x + ", " + y);
        layer.add(wpawnImg1);
        stage.add(layer);
        return false;
    });

    //wpawn2
    var wpawnImg2 = new Kinetic.Image({
        image: images.wpawn,
        x: 125,
        y: 455,
        width: 40,
        height: 40,
        draggable: true,
        name: "wpawnImg2"
    });

    // add cursor styling
    wpawnImg2.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    wpawnImg2.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    wpawnImg2.on('dragend touchend', function () {
        x = wpawnImg2.getPosition().x;
        y = wpawnImg2.getPosition().y;
        socket.emit('wpawn2xy', { x: x, y: y });
    });

    layer.add(wpawnImg2);

    socket.on('returnwpawn2xy', function (data) {
        x = data["x"];
        y = data["y"];
        wpawnImg2.setPosition(x, y);
        console.log(x + ", " + y);
        layer.add(wpawnImg2);
        stage.add(layer);
        return false;
    });

    //wpawn3
    var wpawnImg3 = new Kinetic.Image({
        image: images.wpawn,
        x: 195,
        y: 455,
        width: 40,
        height: 40,
        draggable: true,
        name: "wpawnImg3"
    });

    // add cursor styling
    wpawnImg3.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    wpawnImg3.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    wpawnImg3.on('dragend touchend', function () {
        x = wpawnImg3.getPosition().x;
        y = wpawnImg3.getPosition().y;
        socket.emit('wpawn3xy', { x: x, y: y });
    });

    layer.add(wpawnImg3);

    socket.on('returnwpawn3xy', function (data) {
        x = data["x"];
        y = data["y"];
        wpawnImg3.setPosition(x, y);
        console.log(x + ", " + y);
        layer.add(wpawnImg3);
        stage.add(layer);
        return false;
    });

    //wpawn4
    var wpawnImg4 = new Kinetic.Image({
        image: images.wpawn,
        x: 270,
        y: 455,
        width: 40,
        height: 40,
        draggable: true,
        name: "wpawnImg4"
    });

    // add cursor styling
    wpawnImg4.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    wpawnImg4.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    wpawnImg4.on('dragend touchend', function () {
        x = wpawnImg4.getPosition().x;
        y = wpawnImg4.getPosition().y;
        socket.emit('wpawn4xy', { x: x, y: y });
    });

    layer.add(wpawnImg4);

    socket.on('returnwpawn4xy', function (data) {
        x = data["x"];
        y = data["y"];
        wpawnImg4.setPosition(x, y);
        console.log(x + ", " + y);
        layer.add(wpawnImg4);
        stage.add(layer);
        return false;
    });

    //wpawn5
    var wpawnImg5 = new Kinetic.Image({
        image: images.wpawn,
        x: 340,
        y: 455,
        width: 40,
        height: 40,
        draggable: true,
        name: "wpawnImg5"
    });

    // add cursor styling
    wpawnImg5.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    wpawnImg5.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    wpawnImg5.on('dragend touchend', function () {
        x = wpawnImg5.getPosition().x;
        y = wpawnImg5.getPosition().y;
        socket.emit('wpawn5xy', { x: x, y: y });
    });

    layer.add(wpawnImg5);

    socket.on('returnwpawn5xy', function (data) {
        x = data["x"];
        y = data["y"];
        wpawnImg5.setPosition(x, y);
        console.log(x + ", " + y);
        layer.add(wpawnImg5);
        stage.add(layer);
        return false;
    });

    //wpawn6
    var wpawnImg6 = new Kinetic.Image({
        image: images.wpawn,
        x: 410,
        y: 455,
        width: 40,
        height: 40,
        draggable: true,
        name: "wpawnImg6"
    });

    // add cursor styling
    wpawnImg6.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    wpawnImg6.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    wpawnImg6.on('dragend touchend', function () {
        x = wpawnImg6.getPosition().x;
        y = wpawnImg6.getPosition().y;
        socket.emit('wpawn6xy', { x: x, y: y });
    });

    layer.add(wpawnImg6);

    socket.on('returnwpawn6xy', function (data) {
        x = data["x"];
        y = data["y"];
        wpawnImg6.setPosition(x, y);
        console.log(x + ", " + y);
        layer.add(wpawnImg6);
        stage.add(layer);
        return false;
    });

    //wpawn7
    var wpawnImg7 = new Kinetic.Image({
        image: images.wpawn,
        x: 485,
        y: 455,
        width: 40,
        height: 40,
        draggable: true,
        name: "wpawnImg7"
    });

    // add cursor styling
    wpawnImg7.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    wpawnImg7.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    wpawnImg7.on('dragend touchend', function () {
        x = wpawnImg7.getPosition().x;
        y = wpawnImg7.getPosition().y;
        socket.emit('wpawn7xy', { x: x, y: y });
    });

    layer.add(wpawnImg7);

    socket.on('returnwpawn7xy', function (data) {
        x = data["x"];
        y = data["y"];
        wpawnImg7.setPosition(x, y);
        console.log(x + ", " + y);
        layer.add(wpawnImg7);
        stage.add(layer);
        return false;
    });

    //wpawn8
    var wpawnImg8 = new Kinetic.Image({
        image: images.wpawn,
        x: 560,
        y: 455,
        width: 40,
        height: 40,
        draggable: true,
        name: "wpawnImg8"
    });

    // add cursor styling
    wpawnImg8.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    wpawnImg8.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    wpawnImg8.on('dragend touchend', function () {
        x = wpawnImg8.getPosition().x;
        y = wpawnImg8.getPosition().y;
        socket.emit('wpawn8xy', { x: x, y: y });
    });

    layer.add(wpawnImg8);

    socket.on('returnwpawn8xy', function (data) {
        x = data["x"];
        y = data["y"];
        wpawnImg8.setPosition(x, y);
        console.log(x + ", " + y);
        layer.add(wpawnImg8);
        stage.add(layer);
        return false;
    });

    // bking
    var bkingImg = new Kinetic.Image({
        image: images.bking,
        x: 345,
        y: 25,
        width: 40,
        height: 40,
        draggable: true
    });

    // add cursor styling
    bkingImg.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    bkingImg.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    bkingImg.on('dragend touchend', function () {
        x = bkingImg.getPosition().x;
        y = bkingImg.getPosition().y;
        socket.emit('bkingxy', { x: x, y: y, img: bkingImg });
    });

    layer.add(bkingImg);

    socket.on('returnbkingxy', function (data) {
        x = data["x"];
        y = data["y"];
        bkingImg.setPosition(x, y);
        console.log(x + ", " + y);
        layer.add(bkingImg);
        stage.add(layer);
        return false;
    });

    //bqueen
    var bqueenImg = new Kinetic.Image({
        image: images.bqueen,
        x: 265,
        y: 25,
        width: 40,
        height: 40,
        draggable: true,
        name: "bqueenImg"
    });

    // add cursor styling
    bqueenImg.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    bqueenImg.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    bqueenImg.on('dragend touchend', function () {
        x = bqueenImg.getPosition().x;
        y = bqueenImg.getPosition().y;
        socket.emit('bqueenxy', { x: x, y: y });
    });

    layer.add(bqueenImg);

    socket.on('returnbqueenxy', function (data) {
        x = data["x"];
        y = data["y"];
        bqueenImg.setPosition(x, y);
        console.log(x + ", " + y);
        layer.add(bqueenImg);
        stage.add(layer);
        return false;
    });

    // bbishop1
    var bbishopImg1 = new Kinetic.Image({
        image: images.bbishop,
        x: 200,
        y: 25,
        width: 40,
        height: 40,
        draggable: true,
        name: "bbishopImg1"
    });

    // add cursor styling
    bbishopImg1.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    bbishopImg1.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    bbishopImg1.on('dragend touchend', function () {
        x = bbishopImg1.getPosition().x;
        y = bbishopImg1.getPosition().y;
        socket.emit('bbishop1xy', { x: x, y: y });
    });

    layer.add(bbishopImg1);

    socket.on('returnbbishop1xy', function (data) {
        x = data["x"];
        y = data["y"];
        bbishopImg1.setPosition(x, y);
        console.log(x + ", " + y);
        layer.add(bbishopImg1);
        stage.add(layer);
        return false;
    });

    //bbishop2
    var bbishopImg2 = new Kinetic.Image({
        image: images.bbishop,
        x: 415,
        y: 25,
        width: 40,
        height: 40,
        draggable: true,
        name: "bbishopImg2"
    });

    // add cursor styling
    bbishopImg2.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    bbishopImg2.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    bbishopImg2.on('dragend touchend', function () {
        x = bbishopImg2.getPosition().x;
        y = bbishopImg2.getPosition().y;
        socket.emit('bbishop2xy', { x: x, y: y });
    });

    layer.add(bbishopImg2);

    socket.on('returnbbishop2xy', function (data) {
        x = data["x"];
        y = data["y"];
        bbishopImg2.setPosition(x, y);
        console.log(x + ", " + y);
        layer.add(bbishopImg2);
        stage.add(layer);
        return false;
    });

    // bknight1
    var bknightImg1 = new Kinetic.Image({
        image: images.bknight,
        x: 125,
        y: 25,
        width: 40,
        height: 40,
        draggable: true,
        name: "bknightImg1"
    });

    // add cursor styling
    bknightImg1.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    bknightImg1.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    bknightImg1.on('dragend touchend', function () {
        x = bknightImg1.getPosition().x;
        y = bknightImg1.getPosition().y;
        socket.emit('bknight1xy', { x: x, y: y });
    });

    layer.add(bknightImg1);

    socket.on('returnbknight1xy', function (data) {
        x = data["x"];
        y = data["y"];
        bknightImg1.setPosition(x, y);
        console.log(x + ", " + y);
        layer.add(bknightImg1);
        stage.add(layer);
        return false;
    });

    //bknight2
    var bknightImg2 = new Kinetic.Image({
        image: images.bknight,
        x: 485,
        y: 25,
        width: 40,
        height: 40,
        draggable: true,
        name: "bknightImg2"
    });

    // add cursor styling
    bknightImg2.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    bknightImg2.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    bknightImg2.on('dragend touchend', function () {
        x = bknightImg2.getPosition().x;
        y = bknightImg2.getPosition().y;
        socket.emit('bknight2xy', { x: x, y: y });
    });

    layer.add(bknightImg2);

    socket.on('returnbknight2xy', function (data) {
        x = data["x"];
        y = data["y"];
        bknightImg2.setPosition(x, y);
        console.log(x + ", " + y);
        layer.add(bknightImg2);
        stage.add(layer);
        return false;
    });

    // brook1
    var brookImg1 = new Kinetic.Image({
        image: images.brook,
        x: 50,
        y: 25,
        width: 40,
        height: 40,
        draggable: true,
        name: "brookImg1"
    });

    // add cursor styling
    brookImg1.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    brookImg1.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    brookImg1.on('dragend touchend', function () {
        x = brookImg1.getPosition().x;
        y = brookImg1.getPosition().y;
        socket.emit('brook1xy', { x: x, y: y });
    });

    layer.add(brookImg1);

    socket.on('returnbrook1xy', function (data) {
        x = data["x"];
        y = data["y"];
        brookImg1.setPosition(x, y);
        console.log(x + ", " + y);
        layer.add(brookImg1);
        stage.add(layer);
        return false;
    });

    //brook2
    var brookImg2 = new Kinetic.Image({
        image: images.brook,
        x: 560,
        y: 25,
        width: 40,
        height: 40,
        draggable: true,
        name: "brookImg2"
    });

    // add cursor styling
    brookImg2.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    brookImg2.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    brookImg2.on('dragend touchend', function () {
        x = brookImg2.getPosition().x;
        y = brookImg2.getPosition().y;
        socket.emit('brook2xy', { x: x, y: y });
    });

    layer.add(brookImg2);

    socket.on('returnbrook2xy', function (data) {
        x = data["x"];
        y = data["y"];
        brookImg2.setPosition(x, y);
        console.log(x + ", " + y);
        layer.add(brookImg2);
        stage.add(layer);
        return false;
    });

    //bpawn1
    var bpawnImg1 = new Kinetic.Image({
        image: images.bpawn,
        x: 50,
        y: 100,
        width: 40,
        height: 40,
        draggable: true,
        name: "bpawnImg1"
    });

    // add cursor styling
    bpawnImg1.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    bpawnImg1.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    bpawnImg1.on('dragend touchend', function () {
        x = bpawnImg1.getPosition().x;
        y = bpawnImg1.getPosition().y;
        socket.emit('bpawn1xy', { x: x, y: y });
    });

    layer.add(bpawnImg1);

    socket.on('returnbpawn1xy', function (data) {
        x = data["x"];
        y = data["y"];
        bpawnImg1.setPosition(x, y);
        console.log(x + ", " + y);
        layer.add(bpawnImg1);
        stage.add(layer);
        return false;
    });

    //bpawn2
    var bpawnImg2 = new Kinetic.Image({
        image: images.bpawn,
        x: 125,
        y: 100,
        width: 40,
        height: 40,
        draggable: true,
        name: "bpawnImg2"
    });

    // add cursor styling
    bpawnImg2.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    bpawnImg2.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    bpawnImg2.on('dragend touchend', function () {
        x = bpawnImg2.getPosition().x;
        y = bpawnImg2.getPosition().y;
        socket.emit('bpawn2xy', { x: x, y: y });
    });

    layer.add(bpawnImg2);

    socket.on('returnbpawn2xy', function (data) {
        x = data["x"];
        y = data["y"];
        bpawnImg2.setPosition(x, y);
        console.log(x + ", " + y);
        layer.add(bpawnImg2);
        stage.add(layer);
        return false;
    });

    //bpawn3
    var bpawnImg3 = new Kinetic.Image({
        image: images.bpawn,
        x: 195,
        y: 100,
        width: 40,
        height: 40,
        draggable: true,
        name: "bpawnImg3"
    });

    // add cursor styling
    bpawnImg3.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    bpawnImg3.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    bpawnImg3.on('dragend touchend', function () {
        x = bpawnImg3.getPosition().x;
        y = bpawnImg3.getPosition().y;
        socket.emit('bpawn3xy', { x: x, y: y });
    });

    layer.add(bpawnImg3);

    socket.on('returnbpawn3xy', function (data) {
        x = data["x"];
        y = data["y"];
        bpawnImg3.setPosition(x, y);
        console.log(x + ", " + y);
        layer.add(bpawnImg3);
        stage.add(layer);
        return false;
    });

    //bpawn4
    var bpawnImg4 = new Kinetic.Image({
        image: images.bpawn,
        x: 270,
        y: 100,
        width: 40,
        height: 40,
        draggable: true,
        name: "bpawnImg4"
    });

    // add cursor styling
    bpawnImg4.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    bpawnImg4.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    bpawnImg4.on('dragend touchend', function () {
        x = bpawnImg4.getPosition().x;
        y = bpawnImg4.getPosition().y;
        socket.emit('bpawn4xy', { x: x, y: y });
    });

    layer.add(bpawnImg4);

    socket.on('returnbpawn4xy', function (data) {
        x = data["x"];
        y = data["y"];
        bpawnImg4.setPosition(x, y);
        console.log(x + ", " + y);
        layer.add(bpawnImg4);
        stage.add(layer);
        return false;
    });

    //bpawn5
    var bpawnImg5 = new Kinetic.Image({
        image: images.bpawn,
        x: 340,
        y: 100,
        width: 40,
        height: 40,
        draggable: true,
        name: "bpawnImg5"
    });

    // add cursor styling
    bpawnImg5.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    bpawnImg5.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    bpawnImg5.on('dragend touchend', function () {
        x = bpawnImg5.getPosition().x;
        y = bpawnImg5.getPosition().y;
        socket.emit('bpawn5xy', { x: x, y: y });
    });

    layer.add(bpawnImg5);

    socket.on('returnbpawn5xy', function (data) {
        x = data["x"];
        y = data["y"];
        bpawnImg5.setPosition(x, y);
        console.log(x + ", " + y);
        layer.add(bpawnImg5);
        stage.add(layer);
        return false;
    });

    //bpawn6
    var bpawnImg6 = new Kinetic.Image({
        image: images.bpawn,
        x: 410,
        y: 100,
        width: 40,
        height: 40,
        draggable: true,
        name: "bpawnImg6"
    });

    // add cursor styling
    bpawnImg6.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    bpawnImg6.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    bpawnImg6.on('dragend touchend', function () {
        x = bpawnImg6.getPosition().x;
        y = bpawnImg6.getPosition().y;
        socket.emit('bpawn6xy', { x: x, y: y });
    });

    layer.add(bpawnImg6);

    socket.on('returnbpawn6xy', function (data) {
        x = data["x"];
        y = data["y"];
        bpawnImg6.setPosition(x, y);
        console.log(x + ", " + y);
        layer.add(bpawnImg6);
        stage.add(layer);
        return false;
    });

    //bpawn7
    var bpawnImg7 = new Kinetic.Image({
        image: images.bpawn,
        x: 485,
        y: 100,
        width: 40,
        height: 40,
        draggable: true,
        name: "bpawnImg7"
    });

    // add cursor styling
    bpawnImg7.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    bpawnImg7.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    bpawnImg7.on('dragend touchend', function () {
        x = bpawnImg7.getPosition().x;
        y = bpawnImg7.getPosition().y;
        socket.emit('bpawn7xy', { x: x, y: y });
    });

    layer.add(bpawnImg7);

    socket.on('returnbpawn7xy', function (data) {
        x = data["x"];
        y = data["y"];
        bpawnImg7.setPosition(x, y);
        console.log(x + ", " + y);
        layer.add(bpawnImg7);
        stage.add(layer);
        return false;
    });

    //bpawn8
    var bpawnImg8 = new Kinetic.Image({
        image: images.bpawn,
        x: 560,
        y: 100,
        width: 40,
        height: 40,
        draggable: true,
        name: "bpawnImg8"
    });

    // add cursor styling
    bpawnImg8.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    bpawnImg8.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    bpawnImg8.on('dragend touchend', function () {
        x = bpawnImg8.getPosition().x;
        y = bpawnImg8.getPosition().y;
        socket.emit('bpawn8xy', { x: x, y: y });
    });

    layer.add(bpawnImg8);

    socket.on('returnbpawn8xy', function (data) {
        x = data["x"];
        y = data["y"];
        bpawnImg8.setPosition(x, y);
        console.log(x + ", " + y);
        layer.add(bpawnImg8);
        stage.add(layer);
        return false;
    });

    stage.add(layer);
}

window.onload = function () {
    var sources = {
        wking: "img/wking.gif",
        wqueen: "img/wqueen.gif",
        wbishop: "img/wbishop.gif",
        wknight: "img/wknight.gif",
        wrook: "img/wrook.gif",
        wpawn: "img/wpawn.gif",
        bking: "img/bking.gif",
        bqueen: "img/bqueen.gif",
        bbishop: "img/bbishop.gif",
        bknight: "img/bknight.gif",
        brook: "img/brook.gif",
        bpawn: "img/bpawn.gif",
    };
    loadImages(sources, initStage);
};
