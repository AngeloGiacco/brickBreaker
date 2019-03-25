//create ball class
//PVector
//bounce and display function

function Ball() {

  this.x = width/2;
  this.y = height/2;
  this.xv = random(-2,2);
  this.yv = random(-2,2);

  this.show = function() {
    fill(0,255,255);
    ellipse(this.x, this.y,32,32);
  }

  this.bounce = function() {
    if (this.y <= 0 || this.y >= height) {
      this.yv *= -1;
    }
    if (this.x <= 0 || this.x >= width) {
      this.xv *= -1;
    }
  }

  this.update = function() {
    this.x += this.xv;
    this.y += this.yv;
  }
}
