let x = 200;
let y = 200;
let d = 100;
let counter = 0;
let label = "hola"
function setup() {
  createCanvas(800, 800);
}

function draw() {
  // background(200);
  noStroke();
  fill(random(50, 190), random(50, 100), random(50, 150), 100);
  ellipse(x, y, d, d);
  
  
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(d/20);
  text(label + " " + counter, x, y);
  // d ++;
  // d = d - 4;
  x = random (0, width);
  y = random (0, height);
  counter++;
  console.log(counter);
  d = dist(width/2, height/2, mouseX, mouseY);
  
  // y = y - 1
  
}