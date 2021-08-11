class Obstacles {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = 1;
  }
  show() {
    image(treeImg, this.x, this.y, this.w, this.h);
  }
  move() {
    this.x -= this.speed;
  }
  stop() {
    //this.speed = 0;
    noLoop();
  }
}
