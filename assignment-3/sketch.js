/* 
Shaila Batish 
batish.s@northeastern.edu
ARTG2262
Lab 06, Assignment 3 
Title "Sound On"
*/
function setup() {
  createCanvas(500, 500);
  noLoop(); //only runs "draw" command once
}
function draw() {
  
  //sets background color to pink
  background(255, 239, 241);
  
  //title of composition in lower right corner
  textSize(20);
  fill('navy');
  text ("sound on.", 400,480 )
  
  //centers drawing to the canvas using predefined variables
  translate(width / 2, height / 2);
  
  // Hair (large oval behind head)
  fill(101, 67, 33);
  noStroke();
  ellipse(0, 20, 180, 240);
  
  // Headphone band
  stroke(60, 60, 80);
  strokeWeight(8);
  noFill();
  arc(0, -20, 200, 200, PI, TWO_PI);
  
  // Left ear cup
  fill(60, 60, 80);
  noStroke();
  ellipse(-100, 20, 45, 55);
  
  // Right ear cup
  ellipse(100, 20, 45, 55);
   
  // Neck 
   stroke(0);
  strokeWeight(1);
   fill(198, 136, 99);
  rect(-25, 75, 50, 40);
  
  
  // Head (oval)
 
  fill(198, 136, 99);
  ellipse(0, 0, 140, 170);
  

  // Shirt (red)
  noStroke()
;  fill(180, 60, 60);
  // Rounded top for shirt neckline
  arc(0, 130, 120, 60, PI, TWO_PI);
  rect(-60, 130, 120, 120);
  
  
  // Left closed eye (curved line)
  stroke(50, 40, 40);
  strokeWeight(2);
  noFill();
  arc(-30, -10, 25, 15, 0, PI);
  
  // Right closed eye (curved line)
  arc(30, -10, 25, 15, 0, PI);
  
  // Mouth (curve)
  arc(0, 30, 35, 20, 0, PI);
  
  //bangs
  fill(101, 67, 33);
  noStroke();
  ellipse(0, -80, 80, 40);
 
}