//create ball class
//PVector
//bounce and display function

function Ball() {

  this.x = width/2;
  this.y = height/2;
  this.xv = random(-10,10);
  this.yv = random(-10,10);

  this.show = function() {
    fill(0,255,255);
    ellipse(this.x, this.y,32,32);
  }

  this.bounce = function() {
    if (this.y <= 16 || this.y >= height - 16) {
      this.yv *= -1;
    }
    if (this.x <= 16 || this.x >= width - 16) {
      this.xv *= -1;
    }
  }

  this.update = function() {
    this.x += this.xv;
    this.y += this.yv;
  }
}
