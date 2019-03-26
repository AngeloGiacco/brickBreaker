//create ball class
//PVector
//bounce and display function

function Ball() {

  this.x = width/2;
  this.y = height/2;
  this.xv = random(-8.-4);
  this.yv = random(3,10);
  this.width = 32;
  this.height = 32;

  this.show = function() {
    fill(0,255,255);
    ellipse(this.x, this.y,this.width,this.height);
  }

  this.bounce = function() {
    if (this.y <= this.height / 2 || this.y >= height - this.height / 2) {
      this.yv *= -1;
    }
    if (this.x <= this.width / 2 || this.x >= width - this.width / 2) {
      this.xv *= -1;
    }
  }

  this.update = function() {
    this.x += this.xv;
    this.y += this.yv;
  }
}
