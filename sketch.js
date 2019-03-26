//show the ball and paddle
//update scores
//create two paddles with different button params
var ball;
var paddle;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  ball = new Ball();
  paddle = new Paddle(50,height/2);
}

function draw() {
  background(0);
  ball.show();
  ball.update();
  ball.bounce();
  paddle.show();
}
