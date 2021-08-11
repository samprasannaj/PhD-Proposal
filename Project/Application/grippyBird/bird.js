//creating a Bird object with x,y as positions and w, h as width and height
class Bird {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.gravity = 0.7; // bird falling force
    this.velocity = 0; // bird falling speed altered when Bird.up function is called
    this.lift = 14; // up force
    angleMode(DEGREES);
  }
  show() {
    image(flappyB, this.x, this.y, this.w, this.h);
  }
  up() {
    flappyB.play();
    this.velocity -= this.lift;
    this.velocity *= 0.6;
    
    console.log(this.velocity);
  }
  update() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    if (this.y > height - this.h) {
      this.y = height - this.h;
      this.velocity = 0;
      flappyB.pause();
      flappyB.setFrame(5);
      tree.stop();
    } else if (this.y < 0) {
      this.y = 0;
      this.velocity = +this.gravity;
    }
  }
}
