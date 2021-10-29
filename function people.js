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
