let x = 100;  // Posición inicial del círculo en X
let y = 100;  // Posición inicial del círculo en Y
let speedX = 3;  // Velocidad del círculo en X
let speedY = 2;  // Velocidad del círculo en Y
let radius = 50;  // Radio del círculo

function setup() {
  createCanvas(600, 400);  // Creamos un lienzo de 600x400 píxeles
}

function draw() {
  background(0);  // Limpiamos el fondo en cada cuadro con un color negro
  
  fill(255, 0, 0);  // Color rojo para el círculo
  noStroke();  // Sin contorno
  
  ellipse(x, y, radius * 2, radius * 2);  // Dibujamos el círculo
  
  // Movemos el círculo
  x += speedX;
  y += speedY;
  
  // Condiciones para hacer rebotar el círculo en los bordes
  if (x + radius > width || x - radius < 0) {
    speedX *= -1;  // Cambiamos la dirección en X
  }
  
  if (y + radius > height || y - radius < 0) {
    speedY *= -1;  // Cambiamos la dirección en Y
  }
}