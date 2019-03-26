//create up and down movement for each paddle
//up and down buttons should be params

function Paddle(x,y) {
  this.x = x;
  this.y = y;
  this.yv = 0;
  this.h = 300;
  this.w = 30;

  this.show = function() {
    fill(255);
    rect(this.x - this.w/2,this.y - this.h/2,this.w,this.h);
  }

  this.moveUp = function() {
    this.yv -= 1;
  }

  this.moveDown = function() {
    this.yv += 1;
  }

  this.update = function() {
    this.y += this.yv;
  }
}
