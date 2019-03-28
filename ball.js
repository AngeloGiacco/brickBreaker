//create ball class
//PVector
//bounce and display function

function Ball() {

  this.x = width/2 - 10;
  this.y = height/2;
  this.xv = random(6,10);
  this.xv *= -1;
  this.yv = 1;
  this.width = 32;
  this.height = 32;
  this.lives = 3;
  this.score = 0;
  this.end = false;
  this.won = false;

  this.show = function() {
    fill(0,255,255);
    ellipse(this.x, this.y,this.width,this.height);
  }

  this.bounce = function() {
    if (this.y <= this.height / 2 ) {
      this.yv *= -1;
      this.y = this.height/2 + 4;
    } else if (this.y >= height - this.height / 2){
      this.y = height - this.height/2 - 4;
      this.yv *= -1;
    }
    if (this.x >= width - this.width / 2) {
      this.xv *= -1;
      this.x = width - this.width / 2 - 4;
    } else if (this.x <= this.width / 2) {
      this.lives -= 1;
      if (this.lives > 0) {
        this.x = width/2 - 50;
        this.y = height/2;
        this.xv = random(6,10);
        this.xv *= -1;
        this.yv = random(6,10);
      } else {
        this.end = true;
      }
    }
  }

  this.update = function() {
    this.x += this.xv;
    this.y += this.yv;
  }
}
