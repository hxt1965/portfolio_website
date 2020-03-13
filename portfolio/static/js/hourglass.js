let font, x, y;

function preload() {
    //console.log('Current directory: '+process.cwd());
    font = loadFont('/static/fonts/Minecraft.ttf');
}
function setup() {
    cnv = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    cnv.style('display', 'block');
    cnv.position(0, 0);
    cnv.style('z-index', '-1');
}


function getDetailX() {
    return frameCount%16;
}

function getDetailY() {
    return frameCount%16; 
}

function draw() { 
    resizeCanvas(window.innerWidth, window.innerHeight);
    background(200, 150, 0);
    
    fill(255);
    textFont(font);
    textSize(30);
    text("!!! UNDER CONSTRUCTION !!!", 0, 0);

    rotateY(millis()/1000);
    translate(0, -66);
    hourglass = cone(60, 132, 10, 10);
    translate(0, 66);
    rotateX(PI);
    hourglass2 = cone(60, 132, 10, 10);
}