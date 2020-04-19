function Vehicle(x,y,pic) {
  this.pos = createVector(x,y);
  this.target = createVector(x,y);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.r = 8;
  this.img = pic
  this.maxspeed = 50;
  this.maxforce = 12;
  this.rotate = createVector(random(5), random(5));
}


Vehicle.prototype.behaviors = function() {
  var mouse = createVector(mouseX, mouseY);
  var arrive = this.arrive(this.target);
  var flee = this.flee(mouse);
  this.applyForce(flee);
  this.applyForce(arrive);
}

Vehicle.prototype.applyForce = function(f) {
  this.acc.add(f);
}


Vehicle.prototype.update = function() {
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.rotate.add(this.vel);
  this.acc.mult(0);
}

Vehicle.prototype.show = function() {
  var r = r++;
  push();
  imageMode(CENTER);
  translate(this.pos.x, this.pos.y);
  rotate(this.rotate.y - this.rotate.x);
  stroke(255);
  strokeWeight(12);
  image(this.img, 0, 0, 50, 50);
  pop();
}

Vehicle.prototype.arrive = function(target) {
  var desired = p5.Vector.sub(target, this.pos, this.rotate);
  var d = desired.mag();
  var speed = this.maxspeed;
  if (d < 100) {
    speed = map(d, 0, 100, 0, this.maxspeed);
  }
  desired.setMag(speed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);
  //console.log(steer);
  return steer;
}

Vehicle.prototype.flee = function(target) {
  var desired = p5.Vector.sub(target, this.pos, this.rotate);
   var d = desired.mag();
   if (d < 300) {
     desired.setMag(this.maxspeed);
     desired.mult(-1);
     var steer = p5.Vector.sub(desired, this.vel);
     //steer.limit(this.maxforce);
     return steer;
   } else {
     return createVector(0, 0);
     //this.rotate.mult(0);
   }
}
