class Trash {
    constructor(x, y, radius) {
        var paperoptions = {
           ' isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.trash = Bodies.circle(x, y, radius, paperoptions);
        this.radius = radius;
      //  this.height = height;
     


        World.add(world, this.trash);
      }
      display(){
        var pos =this.trash.position;
        var angle = this.trash.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
       fill("pink")
        circle( 0, 0, this.radius);
        pop();
      }

}