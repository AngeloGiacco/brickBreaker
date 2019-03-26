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
    if (this.yv > 0) {
      this.yv = 0;
    }else {
      this.yv -= 3;
    }
  }

  this.moveDown = function() {
    if (this.yv < 0) {
      this.yv = 0;
    } else {
      this.yv += 3;
    }
  }

  this.update = function() {
    this.y += this.yv;
  }

  this.block = function() {
    if (this.y < 0 + this.h/2) {
      this.y = this.h/2;
      this.yv = 0;
    } else if (this.y > height - this.h/2) {
      this.y = height - this.h/2;
      this.yv = 0;
    }
    if (this.x <= 16 || this.x >= width - 16) {
      this.xv *= -1;
    }
  }
}
