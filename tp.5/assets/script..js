let x = 100; 
let y = 100; 
let speedX = 3;  
let speedY = 2;  
let radius = 50;  

function setup() {
  createCanvas(600, 400);  
}

function draw() {
  background(0);  
  
  fill(256, 0, 0); 
  noStroke();  
  
  ellipse(x, y, radius * 2, radius * 2);  
  
  
  x += speedX;
  y += speedY;
  
  
  if (x + radius > width || x - radius < 0) {
    speedX *= -1;  // Cambiamos la dirección en X
  }
  
  if (y + radius > height || y - radius < 0) {
    speedY *= -1;  // Cambiamos la dirección en Y
  }
}