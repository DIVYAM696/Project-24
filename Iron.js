class Iron {
    constructor(x, y) {
      var options = {
        'density':30,
        'friction': 3,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, 100, 50, options);
      this.width = 150;
      this.height = 120;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(4);
      stroke('white')
      fill('black')
      rectMode(CENTER)
      rect(10, 10, this.width, this.height);
      pop();
    };
  };