
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball,engine,world
function preload()
{
	
	dustbinImage = loadImage("dustbingreen.png");

}

function setup() {

	createCanvas(1600, 700);

	groundSprite=createSprite(width/2, 690, width,10);
	groundSprite.shapeColor = "black";

	dustbin = createSprite(1000,585,10,100);
	dustbin.addImage("dustbin",dustbinImage);
	dustbin.scale = 0.6;

	engine = Engine.create();
	world = engine.world;

	ball = new Paper(200,450,40);
	tBottom = new Dustbin(1000,675,120,20);
	tSide1 = new Dustbin(1050,585,20,190);
	tSide2 = new Dustbin(940,585,20,190);

	ground = Bodies.rectangle(width/2, 690, width, 10 , {isStatic:true} );
	 World.add(world, ground);


	Engine.run(engine);



  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
 
  
  ball.display();
  dustbin.display();
  tBottom.display();
  tSide1.display();
  tSide2.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   
		Matter.Body.applyForce(ball.body,ball.body.position,{x:75,y:-85});
	
	 }
   }
