let person1;
let person2;
let person3;
let background1;
let background2;
let myFont1;
let myFont2;

function preload() {
  background1 = loadImage('background.png');
  background2 = loadImage('background2.png');
  myFont1 = loadFont('HelveticaNeue.ttc');
  myFont2 = loadFont('Avenir.ttc');
}

function setup() {
  person1 = new People(135, 202.5, random(-10, 10), random(-10, 10), 2);
  person2 = new People(357.5, 202.5, random(-12, 12), random(-12, 12), 2);
  person3 = new People(580, 202.5, random(-8, 8), random(-8, 8), 2);

  textSize(20);
  textFont('myFont2');
  text('Sway within the Frame', 255, 67);
}
