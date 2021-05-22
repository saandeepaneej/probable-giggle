class Snow{
    constructor(x, y){
        var options = { 
            'restitution':0.1,
            //'friction':0.01,
            'frictionAir':0.04
          }
          this.body = Bodies.circle(x, y, 1, options);
          this.radius = 1;
          World.add(world, this.body);
          
          this.image= loadImage("snow5.webp")    }
   
    update(){
      if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0, 1000), y:random(0, 650)});
      }
    }
  
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image, 0, 0,30,20);
      pop();
    }
  }