const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var canvas,myEngine,myWorld,ground, ground_options;

function setup() {
  canvas=createCanvas(400,400);

  myEngine=Engine.create(); //world is created
  myWorld=myEngine.world;

  ground_options={
    isStatic:true
  }
 
  ground=Bodies.rectangle(200,390,400,20,ground_options);
  World.add(myWorld,ground);
  console.log(ground);


  
}

function draw() {
  background(0,0,0);  
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
}