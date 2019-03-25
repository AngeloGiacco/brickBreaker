//show the ball and paddle
//update scores
//create two paddles with different button params
var ball;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  ball = new Ball();
}

function draw() {
  background(0);
  ball.show();
  ball.update();
  ball.bounce();
}
