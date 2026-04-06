let button;
let message;

function setup() {
  noCanvas();

  button = createButton("Click Me");
  message = createP("Nothing happened yet");

  button.mousePressed(changeStuff);
}

function changeStuff() {
  message.html("I LOVE MY DOG");
  document.body.style.backgroundColor = "lightpink";
}