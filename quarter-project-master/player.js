

function Player() {
  this.force = createVector(0,0);
  this.force2 = createVector(0,0);
  this.acc = createVector(random(.1, .9), random(-.9, .1));
  this.vel = createVector(random(-3, 3), random(-3, 3));
  this.loc = createVector(0,0);

  this.run = function() {
    this.update();// default = (0,0)
    this.checkEdges();
    this.render();
  }
  this.render = function() {
    fill(200, 30, 200);
    noStroke();
    ellipse(this.loc.x, this.loc.y, 50, 50);
  }
  this.applyForce = function (f) {

  }
  this.update = function(force) {
    this.loc.x = lerp(this.loc.x, mouseX, 0.8);
    this.loc.y = lerp(this.loc.y, mouseY, 0.8);

  }
  this.checkEdges = function() {


  }
}
