
var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600, 400, 50, 50);
  fixedRect.shapeColor="green";
  movingRect=createSprite(400, 200, 50, 50);
  movingRect.shapeColor="red";
}

function draw() {
  background(0,0,0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2)
  {
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }
  else
  {
     movingRect.shapeColor="red";
     fixedRect.shapeColor="green";
  }
  drawSprites();
}