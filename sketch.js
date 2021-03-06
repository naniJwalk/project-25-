const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, dustbinImage, paperObject, paperImage, groundObject	
var world;
function preload(){
	paperImage=addImage("paper.png");
	dustbinImage=addImage("dustbin.png")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	
	paperObject.Add(paperImage);
	dustbinObj.Add(dustbinImage);

	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,450,70);
	groundObject=new ground(width/2,670,width,20); 
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});
	
	paperObject.radius=paperImage.radius - 10;
	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}
