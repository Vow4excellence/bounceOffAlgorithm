var fixedRect, movingRect;
var red1, yellow1;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

red1  = createSprite(400, 300, 100, 60);
yellow1  = createSprite(800, 300, 60, 100);

red1.shapeColor = "red";
yellow1.shapeColor = "yellow";

}

function draw() {
  background(0,0,0);  
  yellow1.x = mouseX;


  bounceOff(movingRect,fixedRect);

if (istouching(red1, yellow1)){
  red1.shapeColor = "white";
yellow1.shapeColor = "green";
}
else{
  red1.shapeColor = "red";
yellow1.shapeColor = "yellow";
}

  drawSprites();
}

function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  } 
}

function istouching(ob1, ob2){
  if (ob1.x - ob2.x === ob1.width/2 + ob2.width/2){
    return true;
  }
  else {
    return false;
  }
}