
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paper,bin1,bin2,bin3;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(500,360,1000,10);
paper=new Trash(100,350,30);
bin1=new Bin(800,345,200,20);
bin2=new Bin(895,285,20,100);
bin3=new Bin(705,285,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  paper.display();
  keypressed()
}

function keypressed(){
if (keyCode  ===  UP_ARROW){
    
  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

}

}


