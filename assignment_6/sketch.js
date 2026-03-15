/*
  Class: ARTG-2263 Section 06
  Name: Shaila Batish
  Email: batish.s@northeastern.edu
  Assignment: 6 Drawing App 
*/

let brushSize = 20;
let col;
let eraseMode = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  col = color(random(255), random(255), random(255));
}

function draw() {
  //color changes values using time and sin function smoothly
  col = color(map(sin(frameCount * 0.01), -1, 1, 0, 255), 100, 150);

 if (mouseIsPressed) {
   //catch all function 
  if (eraseMode) {
    //if the erase mode is on, the stroke color is changed to white 
    stroke(255);
    noFill();
  } else {
    //any other time the stroke is equal to the color that is shifting 
    stroke(col);
    noFill();
  }
   //dependant on scroll wheel 
  strokeWeight(brushSize);
   
   //draws a tiny line from "past" position of mouse to current- smooth line 
  line(pmouseX, pmouseY, mouseX, mouseY);
}

 // Instructions in top left
  noStroke();
  fill(0);  // always black, ignore col
  textSize(20);
  textFont('Times New roman');
  text('SCROLL: change brush size\nE: erase\nC: clear\nS: save', 10, 20);
}

function mouseWheel(event) {
  //scroll up: larger, scroll down: smaller 
  brushSize = constrain(brushSize + event.delta * 0.05, 5, 100);
  
  //prevents page from scrolling when changing size with scroll wheel 
  return false;
}

function keyPressed() {
  if (key === ' ') {
    col = color(random(255), random(255), random(255));
  }

  // Erase toggle
  if (key === 'e' || key === 'E') {
    eraseMode = !eraseMode;
  }

  // Clear
  if (key === 'c' || key === 'C') {
    background(255);
  }

  // Save
  if (key === 's' || key === 'S') {
    saveCanvas('my_drawing', 'png');
  }
}