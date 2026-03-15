/* ARTG22623
Shaila Batish
batish.s@northeastern.edu
Assignment 5
Title: "bubblegum"
*/

let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);

  // create bubbles along the border
  for (let i = 0; i < 60; i++) {
    bubbles.push(newBubble());
  }
}

function draw() {
  background(345, 25, 97);

  drawGrid();
  drawBubbles();
  drawTime();
}

function drawGrid() {
  let gridSize = min(width, height) * 0.2; //grid is 2% of whichever is smaller
  noStroke();
  fill(0, 0, 100, 15);
  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      rect(x, y, gridSize * 0.8, gridSize * 0.8);
    }
  }
}

function drawBubbles() {
  for (let b of bubbles) {
    // pulsate size
    b.pulse += b.pulseSpeed;
    let size = b.baseSize + sin(b.pulse) * b.baseSize * 0.8;

    b.t += b.speed;
    let pos = borderPosition(b.t);
    b.x = pos.x;
    b.y = pos.y;

    noStroke();
    fill(340, 50, 85, 35);
    ellipse(b.x, b.y, size);
  }
}

function borderPosition(t) {
  let perimeter = 2 * (width + height);
  let dist = (t % 1) * perimeter;

  if (dist < width) {
    return { x: dist, y: 0 };                         
  } else if (dist < width + height) {
    return { x: width, y: dist - width };              
  } else if (dist < 2 * width + height) {
    return { x: width - (dist - width - height), y: height }; 
  } else {
    return { x: 0, y: height - (dist - 2 * width - height) }; 
  }
}

function newBubble() {
  return {
    t: random(1),                
    speed: random(0.0005, 0.002),
    baseSize: random(40, 120),
    pulse: random(TWO_PI),
    pulseSpeed: random(0.01, 0.04),
    x: 0,
    y: 0
  };
}

function drawTime() {
  let h = nf(hour(), 2);
  let m = nf(minute(), 2);
  let s = nf(second(), 2);

  noStroke();
  fill(0, 0, 100, 95);
  textFont("verdana");
  textAlign(CENTER, CENTER);
  textSize(width * 0.15);
  text(h + ":" + m , width / 2, height / 2);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}