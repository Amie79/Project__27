
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var bobDiameter = 50;
	var posX = width/2;
	var posY = height/4 + 200;

	//Create the Bodies Here.
	bobObject1=new Bob(posX - bobDiameter*2, posY, bobDiameter);
	bobObject2=new Bob(posX - bobDiameter,posY, bobDiameter);
	bobObject3=new Bob(posX,posY,bobDiameter);
	bobObject4=new Bob(posX +  bobDiameter, posY, bobDiameter);
	bobObject5=new Bob(posX + bobDiameter * 2, posY, bobDiameter);

	roof = new Roof(width/2, height/4, 250, 15);

	rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter*1,0);
	rope3 = new Rope(bobObject3.body,roof.body,0,0); 
 	rope4 = new Rope(bobObject4.body,roof.body,bobDiameter*1,0); 
	rope5 = new Rope(bobObject5.body,roof.body,bobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof.display();
  drawSprites();
 
}

function keyPressed(){

	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-35,y:-40});

	}
}

if (keyCode === DOWN_ARROW) 
	{ Matter.Body.applyForce(bob5.body,bob5.body.position,{x:55,y:45}); 
} 

function drawLine(constraint) { 
	bobPosition = constraint.bodyA.position 
	roofPosition = constraint.bodyB.position 
	roofBodyOffset = constraint.pointB; 
	roofBodyX = roofBodyPosition.x + roofBodyOffset.x 
	roofBodyY = roofBodyPosition.y + roofBodyOffset.y 
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX, roofBodyY); 
}

