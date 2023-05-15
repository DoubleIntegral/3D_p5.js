var mode = 1;

var modeButton; 

function setup() {
  createCanvas(600, 400, WEBGL);
  perspective(PI / 3.0, width / height, 0.1, 500);
  
  modeButton = createButton('mode ' + mode); 
  modeButton.position(10, 10);
  modeButton.mousePressed(changeMode);
}

function draw() {
  background(200);
  if (mode == 1) {
     var r = sin(frameCount * 0.01) * 127 + 128;
     var g = sin(frameCount * 0.01) * 127 + 128;
     var b = sin(frameCount * 0.01) * 127 + 128;
} else { 
     var r = sin(frameCount * 0.01) * 127 + 128;
     var g = sin(frameCount * 0.02) * 127 + 128;
     var b = sin(frameCount * 0.03) * 127 + 128;
}
  fill(r, g, b);
  rotateY(mouseX / 100);
  rotateX(mouseY / 100);
  box(100);
}

function changeMode() {
  if (mode == 1) {
    mode = 2;
  } else {
    mode = 1;
  }
  modeButton.html('mode ' + mode);
}
