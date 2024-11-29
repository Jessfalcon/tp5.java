let device;

class TransformingDevice {
  constructor(x, y, size, parts) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.parts = parts;
    this.transformed = false;
  }

  transform() {
    if (!this.transformed) {
      this.size -= 1;
      if (this.size <= 0) {
        this.transformed = true;
      }
    }
  }

  display() {
    if (this.transformed) {
      for (let part of this.parts) {
        part.display();
      }
    } else {
      fill(150);
      noStroke();
      rectMode(CENTER);
      rect(this.x, this.y, this.size, this.size);
    }
  }
}

class Part {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color(random(100, 255), random(100, 255), random(100, 255));
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }
}

function setup() {
  createCanvas(800, 600);
  frameRate(30);
  let parts = [];
  for (let i = 0; i < 20; i++) {
    parts.push(new Part(random(200, 600), random(200, 400), random(10, 20)));
  }
  device = new TransformingDevice(width / 2, height / 2, 100, parts);
}

function draw() {
  background(255);
  device.transform();
  device.display();

  if (frameCount >= 180) {
    noLoop();
    noCanvas();
  }
}
