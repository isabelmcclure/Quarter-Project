function Boid() {
	this.force = createVector(0,0);
	this.force2 = createVector(0,0);
	this.acc = createVector(0, 0);
	this.vel = createVector(random(-2, 2), random(-2, 2));
	this.loc = createVector(random(w), random(h));
	this.isDead = false;

	this.run = function() {
		this.update();// default = (0,0)
		this.checkEdges();
		this.render();
	}
	this.render = function() {
		if(this.isDead == false){
			push();
			fill(255, 0, 100);
			noStroke();
			ellipse(this.loc.x, this.loc.y, 15, 15);
			pop();
		}
		else if(this.isDead == true){
			fill(255);
			noStroke();
			ellipse(0, 0, 1, 1);
			this.vel = createVector(0, 0);
		}
	}
	this.applyForce = function (f) {
		this.vel.add(f);
	}
	this.update = function() {
		if(this.loc.dist(player.loc) < 75){
			console.log("wassup");
			this.force2 = p5.Vector.sub(this.loc, player.loc);
			this.force2.normalize();
			this.force2.mult(5);
			this.force2.limit(1);
			this.applyForce(this.force2);
		}

		if(this.loc.dist(head.loc) < 20){
			this.isDead = true;
		}

		if(collideRectCircle(400, 100, 400, 200, this.loc.x, this.loc.y, 15)){
			this.force2 = p5.Vector.sub(baseLoc, this.loc);
			this.force2.normalize();
			this.force2.mult(0.1);
			this.force2.limit(1);
			this.applyForce(this.force2);
		}

		this.loc.add(this.vel);
		this.acc.mult(0);
		//bounce off walls
	}

	this.checkEdges = function() {
		if (this.loc.x > width || this.loc.x < 0) {
			//console.log("velx = " + this.vel.x);
			this.vel.x *= (-1);
		}

		if (this.loc.y > height || this.loc.y < 0) {
			this.vel.y *= (-1);
		}
	}

}
