class Pipe {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  show() {
    stroke(220, 0, 0);
    fill(0);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  }
}
