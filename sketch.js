
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, dustbin2, dustbin3;
var ground;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

    ground = new Ground(600,height,1200,20)
    dustbin1 = new Log (630,657,20,120)
    dustbin2 = new Log (740, 657, 20, 120)
    dustbin3 = new Log (686, 690, 100, 20)

	ball = new PAPER(100,200,20);

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ball.display();

  drawSprites();
 
}

function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:60,y:-70});
    }
}



