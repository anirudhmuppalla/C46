var Matt, Matt2, MattImg,MattImg2, MattAnimation;
var bg;
var MattPunching

function preload(){
  MattImg = loadImage("Images/Matt.png");
  MattImg2 = loadImage("Images/Matt.png");
  bg = loadImage("Images/stadium.jpg")
  MattAnimation=loadImage("Images/Matt-punching.png");
}

function setup(){
  createCanvas(600,600);
  var Matt = createSprite(200,400,10,10);
  Matt.addImage("Matt",MattImg)
  Matt.scale=.7
  var Matt2 = createSprite(400,400,10,10);
  Matt2.addImage("Matt2",MattImg2)
  Matt2.scale=.7
}

function draw(){
  background(bg);
 if(keyDown("w")){
   //Matt.addAnimation("Matt",MattAnimation);
   Matt.visible=false;
   MattPunching=createSprite(200,400,10,10);
   MattPunching.addImage("MattPunching",MattAnimation)
 }
  drawSprites();
}