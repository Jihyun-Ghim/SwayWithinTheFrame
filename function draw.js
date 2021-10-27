function draw() {
  createCanvas(720, 405);

  var gravity = createVector(0, 0.1);

  person1.move();
  if (keyIsPressed === true) {
    person1.display11();
  } else {
    person1.display1();
  }
  person1.edges();
  person1.applyForce(gravity);

  person2.move();
 if (keyIsPressed === true) {
    person2.display22();
  } else {
    person2.display2();
  }
  person2.edges();
  person2.applyForce(gravity);

  person3.move();
 if (keyIsPressed === true) {
    person3.display33();
  } else {
    person3.display3();
  }
  person3.edges();
  person3.applyForce(gravity);

  imageMode(CORNER);
  image(background1, 0, 0, 720, 405);

  // fill(0);
  // textSize(15);
  // text('I am moving on', 85, 330);
  // text('I am moving on', 307.5, 330);
  // text('I am moving on', 530, 330);
  //
  // textSize(8);
  // text(person1.pos.x + " " + person1.pos.y, 57.5, 345);
  // text(person2.pos.x + " " + person2.pos.y, 280, 345);
  // text(person3.pos.x + " " + person3.pos.y, 502.5, 345);
  //
  // textSize(20);
  // text('Sway within the Frame', 255, 67);
}
