var backImage,backgr;
var player, player_running;
var ground,ground_img;

var MoneyGroup, coinImage;
var manholeGroup, manhole_img;

var gameOver;
var gameover,gameover_img
var score=0;
var life=3;

function preload(){
  
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
 
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);

  
  ground = createSprite(400,350,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible=false;
  
 
}

function draw() {
  
  background(255);
  
    
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
   
  
    if(keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);
    
  
  drawSprites();
  
}

