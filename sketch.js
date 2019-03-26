//show the ball and paddle
//update scores
//create two paddles with different button params
var ball;
var paddle;
var walls = [];
var colors = [[135,206,250],[0,255,255],[30,144,255],[0,0,205],[25,25,112]];

function rebound(ball, paddle) {
  if (ball.x < paddle.x + paddle.w / 2 && ball.x > paddle.x - paddle.w / 2) {
    if (ball.y > paddle.y - paddle.h/2 && ball.y < paddle.y + paddle.h/2) {
      ball.xv *= -1;
    }
  }
}

function createWalls() {
  for (i=0;i<colors.length;i++) {
    for (j = 0; j < 10; j++) {
      w = width / colors.length;
      h = height / 10;
      startX = width/2 + i * w / colors.length;
      startY = j * h / 10;
      var wall = new Wall(startX, startY, w, h) ;
    }
  }
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  ball = new Ball();
  paddle = new Paddle(50,height/2);
  createWalls();
}

function draw() {
  background(0);
  ball.show();
  ball.update();
  ball.bounce();
  paddle.show();
  paddle.block();
  rebound(ball,paddle);
  for (i=0;i<walls.length;i++) {
    fill(colors[walls[i].level]);
    walls[i].show();
  }
}

function keyPressed() {
  if (keyCode == DOWN_ARROW) {
    paddle.moveDown();
  } else if (keyCode == UP_ARROW) {
    paddle.moveUp();
  }
}
