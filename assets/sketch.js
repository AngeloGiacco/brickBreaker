var ball;
var paddle;
var walls;
var colors = [[135,206,250],[0,255,255],[30,144,255],[0,0,205],[25,25,112]];

function checkWon() {
  if (walls.length == 0) {
    ball.won = true;
    ball.pause = false;
  }
}

function createText() {
  winText = createP('🎉🎉🎉 YOU WIN! 🎉🎉🎉');
  winText.style('display', 'none');
  winText.style('color', 'white');
  winText.position(width / 2 - 150, 100);
  instructionText = createP("Press space to Start, press up or down arrow to move up or down");
  instructionText.style('display', 'none');
  instructionText.style('color', 'white');
  instructionText.position(width / 8, 100);
}

function rebound() {
  if (ball.x <= paddle.x + paddle.w / 2 && ball.x >= paddle.x - paddle.w / 2) {
    if (ball.y >= paddle.y - paddle.h/2 && ball.y <= paddle.y + paddle.h/2) {
      ball.xv *= -1;
      if (ball.y >= paddle.y + (paddle.h / 4) && ball.yv <= 0) {
        ball.yv *= -1;
      } else if (ball.y <= paddle.y - (paddle.h / 4) && ball.yv >= 0) {
        ball.yv *= -1;
      }
    }
  }
}

function breakWall(i) {
  ball.score += 1;
  if (walls[i].level > 0) {
    walls[i].reduceLevel();
  } else {
    walls.splice(i,1);
  }
}


function checkWall() {
  for (i = 0; i < walls.length; i++) {
    if (ball.x >= walls[i].x && ball.x <= walls[i].x + ball.xv && ball.y >= walls[i].y && ball.y <= walls[i].y + ball.yv) {
      ball.yv *= -1;
      ball.xv *= -1;
      breakWall(i)
    } else if (ball.x >= walls[i].x && ball.x <= walls[i].x + ball.xv && ball.y >= walls[i].y + walls[i].height && ball.y <= walls[i].y + walls[i].height + ball.yv) {
      ball.yv *= -1;
      ball.xv *= -1;
      breakWall(i)
    } else if (ball.x >= walls[i].x + walls[i].width && ball.x <= walls[i].x + walls[i].width + ball.xv && ball.y >= walls[i].y && ball.y <= walls[i].y + ball.yv) {
      ball.yv *= -1;
      ball.xv *= -1;
      breakWall(i)
    }else if (ball.x >= walls[i].x + walls[i].width && ball.x <= walls[i].x + walls[i].width + ball.xv && ball.y >= walls[i].y + walls[i].height && ball.y <= walls[i].y + walls[i].height + ball.yv) {
      ball.yv *= -1;
      ball.xv *= -1;
      breakWall(i)
    } else if (((ball.x >= walls[i].x + walls[i].width && ball.x <= walls[i].x + walls[i].width + ball.xv) || ball.x >= walls[i].x && ball.x <= walls[i].x + ball.xv) && (ball.y >= walls[i].y && ball.y <= walls[i].y + walls[i].height)) {
      ball.xv *= -1;
      breakWall(i)
    } else if ((ball.x >= walls[i].x && ball.x <= walls[i].x + walls[i].width) && ((ball.y >= walls[i].y && ball.y <= walls[i].y + ball.yv) || (ball.y <= walls[i].y + walls[i].height && ball.y >= walls[i].y + walls[i].height + ball.yv))) {
      ball.yv *= -1;
      breakWall(i)
    }
  }
}

function createWalls() {
  walls = [];
  for (i=0;i<colors.length;i++) {
    for (j = 0; j < 10; j++) {
      w = (width / 2) / colors.length;
      h = height / 10;
      startX = width/2 + i * w ;
      startY = j * h;
      var wall = new Wall(startX, startY, w, h, i);
      walls.push(wall);
    }
  }
}

function setup() {
  createCanvas(window.innerWidth - 350, 600);
  ball = new Ball();
  paddle = new Paddle(50,height/2);
  createWalls();
  createText();
}

function draw() {
  background(0);
  if (!ball.won && !ball.end) {
    ball.show();
  }
  if (!ball.pause) {
    ball.update();
  }
  ball.bounce();
  paddle.show();
  paddle.block();
  paddle.move();
  rebound();
  for (i=0;i<walls.length;i++) {
    fill(colors[walls[i].level][0],colors[walls[i].level][1],colors[walls[i].level][2]);
    walls[i].show();
  }
  checkWall();
  checkWon();
  fill(255);
  textSize(20);
  if (!ball.end) {
    if (ball.won) {
      winText.style('display', 'block');
    } else {
      message = "lives: " + ball.lives.toString();
      text(message,width/4,30);
    }
  } else {
    message = "Game over, score: "+ball.score.toString();
    text(message,width/4,30);
  }
  if (ball.pause) {
    instructionText.style('display', 'block');
  } else {
    instructionText.style('display', 'none');
  }
}

function keyPressed() {
  if (keyCode == DOWN_ARROW) {
    paddle.setVelocity(height/100);
  } else if (keyCode == UP_ARROW) {
    paddle.setVelocity(-height/100);
  } else if (key == " ") {
    if (ball.pause) {
      ball.pause = false;
    }else if (ball.won) {
      ball = new Ball();
      paddle = new Paddle(50,height/2);
      createWalls();
      createText();
    }
  }
}

function keyReleased() {
  paddle.setVelocity(0);
}
