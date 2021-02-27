
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Ball(100,500,50)
	bob2 = new Ball(200,500,50)
	bob3 = new Ball(300,500,50)
	bob4 = new Ball(400,500,50)
	bob5 = new Ball(500,500,50)

	thing = new Thing(300,100,500,20)
	
	rope = new Rope(bob1.body, thing.body, 2,0)
	rope2 = new Rope(bob2.body, thing.body, 2,0)
	rope3 = new Rope(bob3.body, thing.body, 2,0)
	rope4 = new Rope(bob4.body, thing.body, 2,0)
	rope5 = new Rope(bob5.body, thing.body, 2,0)
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150);

  

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  thing.display();
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(bob5.body,{x: mouseX, y: mouseY})
}



