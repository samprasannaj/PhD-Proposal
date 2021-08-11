//variables declaration
let bird;
let ground;
let flappyB;
let tree;

//preloading images to memory
function preload() {
  flappyB = loadImage("giphy.gif"); // bird image
  treeImg = loadImage("tree.png"); // tree image
}

// function to setup canvas and create objects
function setup() {
  createCanvas(windowWidth, windowHeight); //setting canvas size to full screen
  bird = new Bird(width / 3, height / 2, 100, 100); // creating a bird object
  tree = new Obstacles(width - 150, height - 150); // creating a tree object
  ground = new Pipe(width / 2, height, width, 10); // creating a ground object
}
// this function loops @ 60fps
function draw() {
  background(255); // drawing background to white

  tree.show(); // showing tree on the canvas
  bird.update(); // bird flying and checking top and bottom bounds
  bird.show(); // drawing bird on canvas
  ground.show(); // grawing ground on the forefront
  tree.move(); // moving trees to create parallax effect
}
// function call when mouse is pressed
function mousePressed() {
  loop();
  bird.up();
  //tree.move();
  //bird.update();
}
// function call when keys are pressed
function keyPressed() {
  if (key == " ") {
    loop();
    bird.up();
  }
}
