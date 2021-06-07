const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;


var snowflake,snowflakeImg
var bgImg,girl
var ice=[]
var snowmax = 100
var runner,runnerimg,ground,groundimg;

function preload() {
  snowflakeImg = loadImage("snow4.webp");
  bgImg = loadImage("snow2.jpg");
  runnerimg=loadAnimation("sc1.png","sc2.png","sc3.png","sc4.png","sc5.png","sc6.png","sc7.png","sc8.png","sc9.png","sc10.png","sc11.png","sc12.png");
  groundimg=loadImage("ground.PNG");
}
function setup() {
  createCanvas(1300,600);
  engine=Engine.create();
  world= engine.world;

  runner=createSprite(150,480);
  runner.addAnimation("runner",runnerimg)
  runner.scale=1.1;
 
  runner.setCollider("rectangle",15, -20,100,180) 
  
  ground=createSprite(650,670);;
  ground.addImage(groundimg);
  ground.scale=3;



  if(frameCount % 275 === 0){
    for(var i=0; i<snowmax; i++){
    ice.push(new Snow(random(0,1350), random(0,50)));
    }
    }
  
}
function draw() {
  background(bgImg);  

  Engine.update(engine)
 
  runner.collide(ground)
  if(keyWentDown("space")&& runner.y >= 100) {
    runner.velocityY = -12;
}

  runner.velocityY=runner.velocityY+0.8
  
  for(var i = 0;i < snowmax; i++){
    ice[i].display();
    ice[i].changePosition();
    }    
 ground.display();
 
  drawSprites();

}
