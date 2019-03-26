//show the ball and paddle
//update scores
//create two paddles with different button params
var ball;
var paddle;

function rebound(ball, paddle) {

  if (ball.x < paddle.x + paddle.w / 2 && ball.x > paddle.x - paddle.w / 2) {
    if (ball.y > paddle.y - paddle.h/2 && ball.y < paddle.y + paddle.h/2) {
      ball.xv *= -1;
    }
  }
}

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
  paddle.block()
  rebound(ball,paddle);
}

function keyPressed() {
  if (keyCode == DOWN_ARROW) {
    paddle.moveDown();
  } else if (keyCode == UP_ARROW) {
    paddle.moveUp();
  }
}
