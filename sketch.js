function subtract(a, b, c, d) {
  return a - b - c - d;
}

let result;

function setup() {
  createCanvas(400, 200);
  result = subtract(20, 3, 4, 1);
}

function draw() {
  background(220);
  textSize(20);
  text("The result is " + result, 50, 100);
}