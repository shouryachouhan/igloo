var player1,player2;
var player1Img
function preload(){
  bgImage = loadImage("snow3.jpg")
  player1Img = loadImage("back.jpg")
}
function setup() {
  createCanvas(800,400);
  player1 = createSprite(700, 350, 75, 75);
  player1.addImage("back",player1Img)
}

function draw() {
  background(bgImage);  
  drawSprites();
}