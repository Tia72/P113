function prelode(){}

function setup(){
    canvas = creatCanvas(500, 400);
    canvas.position(70, 20);
    cam = creatCapture(VIDEO);
    cam.hide();
}

function draw(){
    image(cam, 100, 80, 300, 250);

    stroke(168, 10, 10);
    fill(168, 10, 10);

    circle(40, 40, 50);
    circle(460, 360, 50);
    circle(40, 40, 50);
    circle(460, 360, 50);

    stroke(50, 168, 82);
    fill(50, 168, 82);

    rect(63, 27, 375, 25);
    rect(63, 347, 375, 25);
    rect(27, 63, 25, 275);
    rect(448, 63, 25, 275);
}

function take_snapshot(){
    save('snap');
}