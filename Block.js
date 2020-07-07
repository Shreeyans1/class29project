class Block {
  constructor(x, y, width, height) {
    var options = {
        isStatic:false,
        restitution:0,
        'friction':0,
        'density':1.0
    }
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, width, height, options);
    
    
    World.add(world, this.body);
    
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(128, 203, 239);
    strokeWeight(2.5);
    stroke(0)
    rect(0, 0, this.width, this.height);
    
    pop();
  }
};