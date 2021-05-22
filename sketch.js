const Engine = Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;


var snow,backgroundImg;
var Snows = [];
var maxSnow = 100;

function preload(){
  backgroundImg=loadImage("snow1.jpg")
}

function setup() {
  createCanvas(1000,400);
  engine=Engine.create();
  world=engine.world;

  for(var i=0;i< maxSnow;i++){

    Snows.push(new Snow(random(0,500),random(0,500)));
  }
}

function draw() {
  background(backgroundImg);
  for(var i=0;i< maxSnow;i++){
    Snows[i].display();
    Snows[i].update();
  }
  Engine.update(engine);

  drawSprites();
}