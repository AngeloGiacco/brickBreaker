function Wall(x,y,w,h,level) {

  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  this.level = level;

  this.reduceLevel = function() {
    if (this.level > 0) {
      this.level -= 1;
    }
  }

  this.show = function() {
    rect(this.x, this.y, this.width, this.height);
  }
}
