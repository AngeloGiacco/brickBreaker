function Wall(x,y,width,height,level) {

  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.level = level;

  this.reduceLevel = function() {
    this.levels = (this.level > 0) ? this.level - 1 : this.level;
  }

  this.show = function() {
    rect(this.x, this.y, this.width, this.height);
  }
}
