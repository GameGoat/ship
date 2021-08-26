var sea,seaImg;
var ship,shipImg1
function preload(){
   seaImg = loadImage("sea.png")
   shipImg1 = loadAnimation("ship1.png","ship2.png")
}

function setup(){
  createCanvas(400,400);
   sea = createSprite(400,200)
  sea.addImage(seaImg)
   ship = createSprite(200,200,20,20)
  ship.addAnimation("moving", shipImg1)
  ship.scale = 0.25;
  
}

function draw() {
  background("blue");
sea.velocityX = -2
  if (sea.x < 0){
  sea.x = sea.width/2;
  }
  drawSprites()
 
}