let person1;
let person2;
let person3;
let background1;
let background2;

function preload() {
  background1 = loadImage('background.png');
  background2 = loadImage('background2.png');
}

function setup() { 
  person1 = new People(135, 202.5, random(-10, 10), random(-10, 10), 2);
  person2 = new People(357.5, 202.5, random(-12, 12), random(-12, 12), 2);
  person3 = new People(580, 202.5, random(-8, 8), random(-8, 8), 2);
}

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
  
  fill(0);
  textSize(15);  
  text('I am moving on', 85, 330);
  text('I am moving on', 307.5, 330);
  text('I am moving on', 530, 330);
  
  textSize(8);
  text(person1.pos.x + " " + person1.pos.y, 57.5, 345);
  text(person2.pos.x + " " + person2.pos.y, 280, 345);
  text(person3.pos.x + " " + person3.pos.y, 502.5, 345);
  
  textSize(20);
  text('Sway within the Frame', 255, 67);
}
 
function People(x, y, v1, v2, m){
  this.pos = createVector(x, y);
  this.vel = createVector(v1, v2);
  this.acc = createVector(0.05, 0.05);
  this.mass = m;
  
  this.move = function(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }
  
  this.edges = function(){
    if (this.pos.x < 50){
      imageMode(CORNER);
      image(background2, 0, 0, 720, 405);
      this.vel.x *= -1;
      this.pos.x = 50;
      this.mass = 3;
    }
    if (this.pos.x > 665){
      imageMode(CORNER);
      image(background2, 0, 0, 720, 405);
      this.vel.x *= -1;
      this.pos.x = 665;
      this.mass = 1.5;
    }
    if (this.pos.y < 100){
      // imageMode(CORNER);
      // image(background2, 0, 0, 720, 405);
      this.vel.y *= -1;
      this.pos.y = 100;
      this.mass = 1;
    }
    if (this.pos.y > 305){
      // imageMode(CORNER);
      // image(background2, 0, 0, 720, 405);
      this.vel.y *= -1;
      this.pos.y = 305;
      this.mass = 2.5;
    }
  }
  
  this.applyForce = function(force){
    this.acc.add(force);
    force.div(this.mass);
  }
  
  this.display1 = function(){
    fill(random(0, 80), random(0, 80), random(0, 80));
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.mass*10, this.mass*10);
  }
  
  this.display11 = function(){
    fill(random(0, 80), random(0, 80), random(0, 80));
    noStroke();
    square(this.pos.x, this.pos.y, this.mass*10);
  }
  
  this.display2 = function(){
    fill(random(80, 160), random(80, 160), random(80, 160));
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.mass*10, this.mass*10);
  }
  
  this.display22 = function() {
    fill(random(80, 160), random(80, 160), random(80, 160));
    noStroke();
    square(this.pos.x, this.pos.y, this.mass*10);
  }
  
  this.display3 = function(){
    fill(random(160, 240), random(160, 240), random(160, 240));
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.mass*10, this.mass*10);
  }
  
  this.display33 = function(){
    fill(random(160, 240), random(160, 240), random(160, 240));
    noStroke();
    square(this.pos.x, this.pos.y, this.mass*10);       
  }
}
      