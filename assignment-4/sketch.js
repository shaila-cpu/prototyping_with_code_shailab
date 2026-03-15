/* 
Shaila Batish 
batish.s@northeastern.edu
ARTG2262
Lab 06, Assignment 4 
"candy"
*/

function setup() {
  createCanvas(1024, 1024);
  noLoop();
}

function draw() {
  let squaresize = 128;
  let trisize=128;
  let circsize=64; 
  noStroke();
  //creates pink and white grid of squares
  for (let x = 0; x < width; x += squaresize) {
    for (let y = 0; y < height; y += squaresize) {
      let col = (x / squaresize + y / squaresize) % 2;
      
      //squares
      fill(col === 0 ? 'pink' : 'lightblue');
      rect(x, y, squaresize, squaresize);
      
      //triangles
      fill('lavender');
      triangle(x, y, x + trisize, y, x + trisize, y + trisize);
      
      //circles
       fill('white');
      circle(x + circsize/12, y + circsize/12, circsize);
    }
  }
  save("assignment3_pattern_lastname_firstname.png");
  
  
  
}

