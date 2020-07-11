var ball,r1,r2,r3
var world,engine
var ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);
	engine = Engine.create();
	world = engine.world;

	r1=new Dustbin(995,600,10,100)
	r2=new Dustbin(1100,645,200,10)
	r3=new Dustbin(1195,600,10,100)

	ball=new Ball(100,630,20)

	ground=new Ground(width/2,655,width,20)

	

	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
Engine.update(engine)

r1.display();
r2.display();
r3.display();

ball.display()

ground.display()



  
 
}


function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}

}

