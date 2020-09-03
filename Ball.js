class Ball {
    constructor(x,y,radius) {
      var options ={
        friction: 1,
        restitution: 1,
        density : 0.8
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
  
    move(){
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
    }
  
    display() {
          var pos = this.body.position;
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          fill("blue");
         ellipseMode(RADIUS);
         ellipse(0, 0, this.radius);
         pop();
      }
    }