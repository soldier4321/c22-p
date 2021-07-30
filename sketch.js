
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var wall1,wall2,wall3,wall4
var ball_options= {
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);

	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	 
	
	wall1=new ground(400,780,1400,10)
	wall2=new ground(800,730,10,80)
	wall3=new ground(1000,730,10,80 )
	 
	ball=Bodies.circle(200,100,20,ball_options)
    World.add(world,ball)
	rectMode(CENTER);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ellipse(ball.position.x,ball.position.y,20)
 wall1.show()
 wall2.show()
 wall3.show()
  
}
 
function keyPressed(){
if(keyCode === 32){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:60,y:-0 })
}

}


 